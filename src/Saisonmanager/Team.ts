

export interface Team
{
    id: number
    name: string
    short_name: string
    logo?: string
    league_id: number
    cup_leagues: number[]
    club_id: number
    league_name: string
    league_short_name: string
    game_operation_id: number
    game_operation_name: string
    game_operation_short_name: string
    game_operation_slug: string
    syndicate: boolean
    syndicate_clubs: number[]
    logo_url: string
    logo_small: string
}

export interface Club
{
    id: number
    long_name: string
    name: string
    short_name: string
    state: string // "de-st" Sachsen Anhalt, "de-sn" Sachsen...
    logo_url: string
    logo_small_url: string
    game_operation_id: number
    additional_game_operation_ids: number[]
}

