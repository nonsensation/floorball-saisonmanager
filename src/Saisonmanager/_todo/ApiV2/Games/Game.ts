// https://saisonmanager.de/api/v2/games/35497.json
// Used in /leagues/{leagueId}/schedule.json

export interface BaseGame
{
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
    referees: Referee[]
    notice_type: string | null
    notice_string: string | null
    current_period_title: PeriodTitle | null
    result_string: string | null
    result: Result | null
}

export interface Game extends BaseGame
{
    id: number | null
    game_day: GameDay | null
    game_number: string | null
    start_time: string | null
    actual_start_time: string | null
    game_status: string | null
    ingame_status: string | null
    audience: number | null
    home_team_id: number | null
    guest_team_id: number | null
    live_stream_link: string | null
    vod_link: string | null
    events: Event[]
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
    period_titles: PeriodTitle[]
    nominated_referees: string | null
    deletable: boolean | null
}

export interface PeriodTitle
{
    period: number | null
    short_title: string | null
    title: string | null
    status_id: string | null
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
    home_goals_period: ( number | null )[]
    guest_goals_period: ( number | null )[]
    postfix: Postfix | null
    forfait: boolean | null
    overtime: boolean | null
}

export interface Players
{
    home: TeamPlayer[]
    guest: TeamPlayer[]
}

export interface Awards
{
    home: AwardPlayer[]
    guest: AwardPlayer[]
}

export interface StartingPlayers
{
    home: StartingPlayer[]
    guest: StartingPlayer[]
}

export interface Event
{
    event_id: number | null
    event_type: string | null
    event_team: string | null
    period: number | null
    home_goals: number | null
    guest_goals: number | null
    time: string | null
    sortkey: string | null
    number: number | null
    penalty_type: string | null
    penalty_type_string: string | null
    penalty_reason: number | null
    penalty_reason_string: string | null
    assist: number | null
    goal_type: string | null
    goal_type_string: string | null
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
    position: string | null
}

export interface AwardPlayer extends BasePlayer
{
    award: string | null
}
