// https://saisonmanager.de/api/v2/leagues/1396.json

export interface GameDayTitle
{
    game_day_number: number | null
    title: string
}

export interface League extends League
{
    similar_leagues: League[]
}
