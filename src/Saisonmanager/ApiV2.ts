/*
PUBLIC ENDPOINTS (as of June 2024)

https://saisonmanager.de/api/v2/init.json -> ApiV2.Init
https://saisonmanager.de/api/v2/leagues.json -> ApiV2.League[]
https://saisonmanager.de/api/v2/games.json -> ApiV2.GamePreview[]
https://saisonmanager.de/api/v2/user/leagues/penalties.json -> ApiV2.Penalty[]
https://saisonmanager.de/api/v2/user/leagues/penalty_codes.json -> ApiV2.PenaltyCode[]
https://saisonmanager.de/api/v2/game_operations/1/leagues.json -> ApiV2.League[]
https://saisonmanager.de/api/v2/admin/leagues/1396/additional_references.json -> ApiV2.AdditionalReference
https://saisonmanager.de/api/v2/games/35497.json -> ApiV2.Game
https://saisonmanager.de/api/v2/leagues/1375/game_days/current/schedule.json -> ApiV2.GameDay[]
https://saisonmanager.de/api/v2/leagues/1375/game_days/1/schedule.json -> ApiV2.GameDay[]
https://saisonmanager.de/api/v2/leagues/1375/table.json -> ApiV2.Team[]
https://saisonmanager.de/api/v2/leagues/1396.json -> ApiV2.LeagueWithSimilarLeagues
https://saisonmanager.de/api/v2/leagues/1396/schedule.json -> ApiV2.ScheduledGame[]
https://saisonmanager.de/api/v2/leagues/1396/scorer.json -> ApiV2.Scorer[]
https://saisonmanager.de/api/v2/leagues/1564/grouped_table.json -> ApiV2.GroupedTable

https://saisonmanager.de/api/v2/
    │
    ├── init.json
    ├── leagues.json
    ├── games.json
    ├── games/
    │   └── {Game-ID}.json
    ├── game_operations/
    │   └── {GameOperation-ID}
    │       └── leagues
    │           └── {League-ID}.json
    ├── leagues/
    │   ├── {League-ID}.json
    │   └── {League-ID}/
    │       ├── game_days/
    │       │   ├── {GameDay-ID}/
    │       │   │   └── schedule.json
    │       │   └── current/
    │       │       └── schedule.json
    │       ├── schedule.json
    │       ├── table.json
    │       ├── grouped_table.json
    │       └── scorer.json
    ├── admin/
    │   └── leagues/
    │       └── {League-ID}/
    │           └── additional_references.json
    └── user/
        └── leagues/
            ├── penalties.json
            └── penalty_codes.json
*/

export namespace ApiV2
{
    // https://saisonmanager.de/api/v2/init.json -> ApiV2.Init
    export interface Init
    {
        seasons: Season[] | null
        current_season_id: number | null
        game_operations: GameOperation[] | null
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
        top_leagues: League[] | null
    }

    // https://saisonmanager.de/api/v2/leagues.json -> ApiV2.LeaguePreview[]
    export interface LeaguePreview
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

    // https://saisonmanager.de/api/v2/games.json -> ApiV2.GamePreview[]
    export interface GamePreview
    {
        id: number | null
        game_number: string | null
        start_time: string | null
        audience: number | null
    }

    // https://saisonmanager.de/api/v2/user/leagues/penalties.json -> ApiV2.Penalty[]
    export interface Penalty
    {
        name: string | null
        order: number | null
        mapping: string | null
        description: string | null
        id: string | null
    }

    // https://saisonmanager.de/api/v2/user/leagues/penalty_codes.json -> ApiV2.PenaltyCode[]
    export interface PenaltyCode
    {
        name: string | null
        order: number | null
        mapping: string | null
        description: string | null
        id: string | null
    }

    // https://saisonmanager.de/api/v2/game_operations/1/leagues.json -> ApiV2.League[]
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
        game_day_numbers: number[] | null
        game_day_titles: GameDay[] | null
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

    // https://saisonmanager.de/api/v2/admin/leagues/1396/additional_references.json -> ApiV2.AdditionalReference
    export interface AdditionalReference
    {
        arenas: Arena[] | null
        teams: Team[] | null
        clubs: Club[] | null
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

    // (used also in /leagues/{leagueId}/schedule.json)
    interface _BaseGame
    {
        // only exported to access in other namespaces in this file..
        arena: number | null
        arena_name: string | null
        arena_address: string | null
        arena_short: string | null
        date: string | null
        started: boolean | null
        ended: boolean | null
        home_team_name: string | null
        home_team_logo: string | null
        home_team_small_logo: string | null
        guest_team_name: string | null
        guest_team_logo: string | null
        guest_team_small_logo: string | null
        referees: Referee[] | null
        notice_type: string | null
        notice_string: string | null
        current_period_title: PeriodTitle | null
        result_string: string | null
        result: Result | null
    }

    // https://saisonmanager.de/api/v2/games/35497.json -> ApiV2.Game
    export interface Game extends _BaseGame
    {
        id: number | null
        game_day: GameDay | null
        game_number: string | null
        start_time: string | null
        actual_start_time: string | null
        game_status: GameState | null
        ingame_status: IngameState | null
        audience: number | null
        home_team_id: number | null
        guest_team_id: number | null
        live_stream_link: string | null
        vod_link: string | null
        events: Event[] | null
        players: Players | null
        starting_players: StartingPlayers | null
        awards: Awards | null
        league_id: number | null
        league_name: string | null
        league_short_name: string | null
        game_operation_id: number | null
        game_operation_name: string | null
        game_operation_short_name: string | null
        game_operation_slug: string | null
        period_titles: PeriodTitle[] | null
        nominated_referees: string | null
        deletable: boolean | null
    }

    export enum GameState
    {
        Ingame = "ingame",
        Ended = "ended",
        NoRecord = "no_record",
        AfterGame = "aftergame",
        MatchRecordClosed = "match_record_closed",
    }

    export enum IngameState
    {
        Period1 = "period1",
        Pause1 = "pause1",
        Period2 = "period2",
        Pause2 = "pause2",
        Period3 = "period3",
        PauseET = "pause_et",
        Extratime = "extratime",
        PausePS = "pause_ps",
        PenaltyShots = "penalty_shots",
    }

    export type PeriodNumber = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

    export interface PeriodTitle
    {
        period: PeriodNumber | null
        short_title: string | null
        title: string | null
        status_id: IngameState | null
        can_end_game: boolean | null
        optional: boolean | null
        running: boolean | null
    }

    export interface Postfix
    {
        short: string | null
        long: string | null
    }

    export interface Referee
    {
        license_id: string | null
        first_name: string | null
        last_name: string | null
    }

    export interface Result
    {
        home_goals: number | null
        guest_goals: number | null
        home_goals_period: ( number | null )[] | null
        guest_goals_period: ( number | null )[] | null
        postfix: Postfix | null
        forfait: boolean | null
        overtime: boolean | null
    }

    export interface Players
    {
        home: TeamPlayer[] | null
        guest: TeamPlayer[] | null
    }

    export interface Awards
    {
        home: AwardPlayer[] | null
        guest: AwardPlayer[] | null
    }

    export interface StartingPlayers
    {
        home: StartingPlayer[] | null
        guest: StartingPlayer[] | null
    }

    export interface BasePlayer
    {
        player_id: number | null
        trikot_number: number | null
        player_name: string | null
        player_firstname: string | null
    }

    export interface TeamPlayer extends BasePlayer
    {
        captain: boolean | null
        goalkeeper: boolean | null
        position: string | null
    }

    export interface StartingPlayer extends BasePlayer
    {
        position: StartingFieldPosition | null
    }

    export enum StartingFieldPosition
    {
        Goal = "goal",
        Field = "goal",
        Defender1 = "defender1",
        Defender2 = "defender2",
        Center = "center",
        Forward1 = "forward1",
        Forward2 = "forward2",
    }

    export enum GameAward
    {
        Mvp = "mvp",
    }

    export interface AwardPlayer extends BasePlayer
    {
        award: GameAward | null
    }

    export interface Event
    {
        event_id: number | null
        event_type: EventType | null
        event_team: EventTeam | null
        period: PeriodNumber | null
        home_goals: number | null
        guest_goals: number | null
        time: string | null
        sortkey: string | null
        number: number | null
        penalty_type: PenaltyType | null
        penalty_type_string: string | null
        penalty_reason: number | null
        penalty_reason_string: string | null
        assist: number | null
        goal_type: GoalType | null
        goal_type_string: string | null
    }

    export enum EventType
    {
        Goal = "goal",
        Timeout = "timeout",
        Penalty = "penalty", // Strafe
    }

    export enum EventTeam
    {
        Home = "home",
        Guest = "guest",
    }

    export enum GoalType
    {
        Regular = "regular",
        Owngoal = "owngoal",
        PenaltyShot = "penalty_shot",
    }

    export enum PenaltyReason { }
    // 907 Stoßen

    export enum PenaltyType
    {
        Penalty_2 = "penalty_2",
        Penalty_2and2 = "penalty_2and2",
        Penalty_5 = "penalty_5",
        Penalty_10 = "penalty_10",
        Penalty_ms_tech = "penalty_ms_tech",
        Penalty_ms_full = "penalty_ms_full",
        Penalty_ms1 = "penalty_ms1",
        Penalty_ms2 = "penalty_ms2",
        Penalty_ms3 = "penalty_ms3",
    }

    // https://saisonmanager.de/api/v2/leagues/1375/game_days/current/schedule.json -> ApiV2.GameDay[]
    // https://saisonmanager.de/api/v2/leagues/1375/game_days/1/schedule.json -> ApiV2.GameDay[]
    export interface GameDay extends Game { }

    // https://saisonmanager.de/api/v2/leagues/1375/table.json -> ApiV2.Team[]
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

    export interface GameDayTitle
    {
        game_day_number: number | null
        title: string | null
    }

    // https://saisonmanager.de/api/v2/leagues/1396.json -> ApiV2.LeagueWithSimilarLeagues
    export interface LeagueWithSimilarLeagues extends League
    {
        similar_leagues: League[] | null
    }

    // https://saisonmanager.de/api/v2/leagues/1396/schedule.json -> ApiV2.ScheduledGame[]
    export interface ScheduledGame extends _BaseGame
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

    // https://saisonmanager.de/api/v2/leagues/1396/scorer.json -> ApiV2.Scorer[]
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

    // https://saisonmanager.de/api/v2/leagues/1564/grouped_table.json -> ApiV2.GroupedTable
    export interface GroupedTable
    {
        groups: { [ key: string ]: Group } | null
    }

    export interface Group
    {
        group_identifier: string | null
        team_name: string | null
        table: Team[] | null
    }

    export interface PointCorrection
    {
        points: number | null
        reason: string | null
        reference_number: string | null
        team_name: string | null
    }
}
