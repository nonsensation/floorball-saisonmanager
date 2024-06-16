// https://saisonmanager.de/api/v2/init.json
export interface Init
{
    seasons: Season[]
    current_season_id: number | null
    game_operations: GameOperation[]
}

export interface Season
{
    id: number | null
    name: string | null
    current: boolean | null
}

export interface GameOperation
{
    id: number | null
    name: string | null
    short_name: string | null
    path: string | null
    logo_url: string | null
    logo_quad_url: string | null
    top_leagues: League[]
}
