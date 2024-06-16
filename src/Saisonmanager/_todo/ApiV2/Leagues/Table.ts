// https://saisonmanager.de/api/v2/leagues/1396/table.json
export interface Table
{
    teams: Team[]
}

export interface Team
{
    games: number | null
    won: number | null
    draw: number | null
    lost: number | null
    won_ot: number | null
    lost_ot: number | null
    goals_scored: number | null
    goals_received: number | null
    goals_diff: number | null
    points: number | null
    team_name: string | null
    team_id: number | null
    team_logo: string | null
    team_logo_small: string | null
    point_corrections: PointCorrection | null
    sort: number | null
    position: number | null
}

export interface PointCorrection
{
    points: number | null
    reason: string | null
    reference_number: string | null
    team_name: string | null
}
