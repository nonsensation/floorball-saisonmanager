// https://saisonmanager.de/api/v2/game_operations/1/leagues.json
export interface GameOperation
{
    leagues: League[]
}

export interface League
{
    id: number
    game_operation_id: number | null
    game_operation_name: string | null
    game_operation_short_name: string | null
    game_operation_slug: string | null
    league_category_id: string | null
    league_class_id: string | null
    league_system_id: string | null
    league_type: string | null
    name: string | null
    female: boolean | null
    enable_scorer: boolean | null
    short_name: string | null
    season_id: string | null
    order_key: string | null
    game_day_numbers: number[]
    game_day_titles: GameDay[]
    deadline: any | null
    before_deadline: any | null
    legacy_league: boolean | null
    field_size: string | null
    league_modus: string | null
    has_preround: boolean | null
    table_modus: string | null
    periods: number | null
    period_length: number | null
    overtime_length: number | null
}

export interface GameDay
{
    game_day_number: number | null
    title: string | null
}
