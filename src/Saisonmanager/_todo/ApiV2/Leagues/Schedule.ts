// https://saisonmanager.de/api/v2/leagues/1396/schedule.json
export interface Schedule
{
    scheduledGames: ScheduledGame[]
}

export interface ScheduledGame extends BaseGame
{
    time: string | null
    hosting_club: string | null
    game_id: number | null
    game_number: number | null
    game_day: number | null
    game_day_id: number | null
    group_identifier: any | null
    series_title: any | null
    series_number: any | null
    home_team_filling_rule: any | null
    home_team_filling_title: any | null
    home_team_filling_parameter: any | null
    guest_team_filling_rule: any | null
    guest_team_filling_title: any | null
    guest_team_filling_parameter: any | null
    nominated_referee_string: string | null
    state: string | null
}
