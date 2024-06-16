// https://saisonmanager.de/api/v2/leagues/1396/scorer.json
export interface Scorer
{
    games: number | null
    goals: number | null
    assists: number | null
    penalty_2: number | null
    penalty_2and2: number | null
    penalty_5: number | null
    penalty_10: number | null
    penalty_ms_tech: number | null
    penalty_ms_full: number | null
    penalty_ms1: number | null
    penalty_ms2: number | null
    penalty_ms3: number | null
    player_id: number | null
    team_id: number | null
    team_name: string | null
    first_name: string | null
    last_name: string | null
    image: any | null
    image_small: any | null
    sort: number | null
    position: number | null
}
