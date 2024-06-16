export namespace ApiV2.Admin.Leagues
{
    // https://saisonmanager.de/api/v2/admin/leagues/1396/additional_references.json
    export interface AdditionalReference
    {
        arenas: Arena[]
        teams: Team[]
        clubs: Club[]
    }

    export interface Arena
    {
        id: number | null
        capacity: string | null
        city: string | null
        comment: string | null
        created_at: string | null
        created_by: number | null
        disabled: boolean | null
        housenumber: string | null
        name: string | null
        postcode: string | null
        public_transport_note: string | null
        street: string | null
        travel_note: string | null
        updated_at: string | null
        updated_by: number | null
    }

    export interface Club
    {
        id: number | null
        long_name: string | null
        name: string | null
        short_name: string | null
        state: string | null
        logo_url: string | null
        logo_small_url: string | null
        game_operation_id: number | null
        additional_game_operation_ids: ( number | null )[]
    }

    export interface Team
    {
        id: number | null
        name: string | null
        short_name: string | null
        logo: any | null
        league_id: number | null
        cup_leagues: ( number | null )[]
        club_id: number | null
        league_name: string | null
        league_short_name: string | null
        game_operation_id: number | null
        game_operation_name: string | null
        game_operation_short_name: string | null
        game_operation_slug: string | null
        syndicate: boolean | null
        syndicate_clubs: ( number | null )[]
        logo_url: string | null
        logo_small: string | null
    }
}
