

// https://saisonmanager.de/api/v2/leagues/1396/table.json

export interface TeamStats
{
    games: number
    won: number
    draw: number
    lost: number
    won_ot: number
    lost_ot: number
    goals_scored: number
    goals_received: number
    goals_diff: number
    points: number
    team_name: string
    team_id: number
    team_logo: string
    team_logo_small: string
    point_corrections?: string
    sort: number
    position: number
}

// https://saisonmanager.de/api/v2/leagues/1396/scorer.json

export interface PlayerStats
{
    games: number
    goals: number
    assists: number
    penalty_2: number
    penalty_2and2: number
    penalty_5: number
    penalty_10: number
    penalty_ms_tech: number
    penalty_ms_full: number
    penalty_ms1: number
    penalty_ms2: number
    penalty_ms3: number
    player_id: number
    team_id: number
    team_name: string
    first_name: string
    last_name: string
    image?: string
    image_small?: string
    sort: number
    position: number
}

