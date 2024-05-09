import json
import os
import requests




def prettify_json_file(file_path):
    """Prettify the contents of the JSON file."""
    try:
        with open(file_path, 'r',encoding='utf-8') as f:
            data = json.load(f)
        prettified_json = json.dumps(data, indent=4)
        return prettified_json
    except (json.JSONDecodeError, FileNotFoundError):
        return None

def process_directory(directory):
    """Process all JSON files in the specified directory and its subdirectories."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.json'):
                file_path = os.path.join(root, file)
                prettified_content = prettify_json_file(file_path)
                if prettified_content is not None:
                    with open(file_path, 'w',encoding='utf-8') as f:
                        f.write(prettified_content)
                    print(f"Prettified '{file_path}' and saved back.")

# Example usage:
directory = './api/'
process_directory(directory)


def download_file(url):

    url = '/api/v2' + url
    filepath = '.' + url

    if not os.path.exists(filepath):
        os.makedirs(os.path.dirname(filepath),mode=0o777,exist_ok=True)
    else:
        print(f'Skip: {filepath}')
        return

    print(f'DOWNLOADING {"https://saisonmanager.de"+url} into {filepath}')
    
    response = requests.get('https://saisonmanager.de'+url)
    
    if response.status_code == 200:
        try:
            data = response.json()
            with open(filepath, 'w',encoding='utf-8') as f:
                json.dump(data, f, indent=4)
        except json.JSONDecodeError:
            print("Invalid JSON content")
    else:
        print(f'Failed to download {filepath}. Status code: {response.status_code}')


def main():

    # TODO:
    # https://saisonmanager.de/api/v2/game_operations/6/leagues.json

    download_file('/user/leagues/penalty_codes.json')
    download_file('/user/leagues/penalties.json')


    download_file('/init.json')
    with open('./api/v2/init.json', 'r',encoding='utf-8') as f:
        gameop_data = json.load(f)
        gameops = gameop_data.get('game_operations')
        print(f'Game-Operations found: {len(gameops)}')
        for gameop in gameops:
            gameop_id = gameop.get('id')
            download_file(f'/game_operations/{gameop_id}/leagues.json')



    leagues_file = '/leagues.json'
    
    download_file(leagues_file)

    with open('./api/v2'+leagues_file, 'r',encoding='utf-8') as f:
        leagues_data = json.load(f)

    print(f'Leagues found: {len(leagues_data)}')
    
    for league in leagues_data:
        league_id = league.get('id')

        # if league_id != 521 :
        #     continue

        download_file(league.get('link'))
        download_file(league.get('link_schedule'))
        download_file(f'/leagues/{league_id}/table.json')
        download_file(f'/leagues/{league_id}/scorer.json')
        download_file(f'/admin/leagues/{league_id}/additional_references.json')

        with open(f'./api/v2/leagues/{league_id}/schedule.json', 'r',encoding='utf-8') as f:
            schedule_data = json.load(f)

        print(f'Matches found: {len(schedule_data)}')

        for entry in schedule_data:
            download_file(f'/games/{entry.get("game_id")}.json')

        # break

if __name__ == "__main__":
    main()
