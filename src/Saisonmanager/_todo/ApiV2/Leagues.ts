// https://saisonmanager.de/api/v2/leagues.json
export interface League
{
    id: number | null
    operation_id: number | null
    game_operation: string | null
    season: string | null
    name: string | null
    order_key: string | null
    link: string | null
    link_schedule: string | null
}
