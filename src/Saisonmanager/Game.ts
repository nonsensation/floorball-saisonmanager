import type { Event } from "./Event"

export interface Game
{
    game_id: number // 35496
    game_number: string // "16"
    // game_day: number

    arena: number // 430
    arena_name: string // "Max-Schmeling-Halle"
    arena_address: string // "Am Falkplatz 1, 10437 Berlin"
    arena_short: string // "Berlin, Max-Schmeling-Halle"

    hosting_club: string
    game_day_id: number
    date: string // "2024-05-12"
    // time: string //?

    started: boolean
    ended: boolean

    home_team_name: string
    home_team_logo: string
    home_team_small_logo: string

    guest_team_name: string
    guest_team_logo: string
    guest_team_small_logo: string

    nominated_referees: string // "M. Mustermann / J. Doe"
    referees: Referee[]

    notice_type: string
    notice_string: string
    state: IngameState
    group_identifier?: string
    series_title?: string
    series_number?: string
    home_team_filling_rule?: string
    home_team_filling_title?: string
    home_team_filling_parameter?: string
    guest_team_filling_rule?: string
    guest_team_filling_title?: string
    guest_team_filling_parameter?: string

    // MatchResult
    result_string?: string // "0:2"
    result?: Result

    // https://saisonmanager.de/api/v2/games/32217.json
    // MatchReport

    events: Event[]

    players: Players

    period_titles?: PeriodTitle[]
    current_period_title?: PeriodTitle

    audience?: number

    game_status: GameState
    ingame_status: IngameState

    live_stream_link?: string
    vod_link?: string

    home_team_id: number
    guest_team_id: number

    start_time?: string // "12:30"
    actual_start_time?: string // "12:30"

    deletable: boolean

    game_day: GameDay

    league_id: number // 1449
    league_name: string // "FD-Pokal Damen"
    league_short_name: string // FD-Pokal (D)

    game_operation_id: number // 1
    game_operation_name: string // "Floorball Deutschland"
    game_operation_short_name: string // "FVD"
    game_operation_slug: string // "FVD"
}


export interface GameDay
{
    game_day_number: number
    title: string
}

export interface Result
{
    home_goals: number
    guest_goals: number
    home_goals_period: number[] // [ 0 , 0 , 2 , 0 ]
    guest_goals_period: number[] // [ 1 , 0 , 3 , 0 ]
    postfix: ResultPostfix
    forfait: boolean
    overtime: boolean
}

export interface ResultPostfix
{
    short: string // "n.V."
    long: string // "nach Verlängerung"
}

export interface Referee
{
    license_id: string // "1234"
    first_name: string
    last_name: string
}

export interface Players
{
    home: Player[]
    guest: Player[]
}

export interface Player
{
    player_id: number
    goalkeeper?: boolean
    captain?: boolean
    player_name: string
    trikot_number: number
    player_firstname: string
    position: string
}

export enum GameState
{
    Ingame = 'ingame',
    Ended = 'ended',
    NoRecord = 'no_record',
    AfterGame = 'aftergame',
    MatchRecordClosed = 'match_record_closed',
}

export enum IngameState
{
    Period1 = 'period1',
    Pause1 = 'pause1',
    Period2 = 'period2',
    Pause2 = 'pause2',
    Period3 = 'period3',
    PauseET = 'pause_et',
    Extratime = 'extratime',
    PausePS = 'pause_ps',
    PenaltyShots = 'penalty_shots',
}

export interface PeriodTitle
{
    period: PeriodNumber
    short_title: string // "P1"
    title: string // "1. Drittelpause"
    status_id: IngameState // "pause1"
    can_end_game: boolean
    optional: boolean
    running: boolean
}

export type PeriodNumber = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5


export const PeriodTitles: SM.PeriodTitle[] = [
    {
        period: 1,
        short_title: "1",
        title: "1. Drittel",
        status_id: SM.IngameState.Period1,
        can_end_game: false,
        optional: false,
        running: true,
    },
    {
        period: 1.5,
        short_title: "P1",
        title: "1. Drittelpause",
        status_id: SM.IngameState.Pause1,
        can_end_game: false,
        optional: false,
        running: false,
    },
    {
        period: 2,
        short_title: "2",
        title: "2. Drittel",
        status_id: SM.IngameState.Period2,
        can_end_game: false,
        optional: false,
        running: true,
    },
    {
        period: 2.5,
        short_title: "P2",
        title: "2. Drittelpause",
        status_id: SM.IngameState.Pause2,
        can_end_game: false,
        optional: false,
        running: false,
    },

    {
        period: 3,
        short_title: "3",
        title: "3. Drittel",
        status_id: SM.IngameState.Period3,
        can_end_game: true,
        optional: false,
        running: true,
    },
    {
        period: 3.5,
        short_title: "PV",
        title: "Pause vor Verlängerung",
        status_id: SM.IngameState.PauseET,
        can_end_game: false,
        optional: true,
        running: false,
    },

    {
        period: 4,
        short_title: "V",
        title: "Verlängerung",
        status_id: SM.IngameState.Extratime,
        can_end_game: true,
        optional: true,
        running: true,
    },
    {
        period: 4.5,
        short_title: "PP",
        title: "Pause vor Penalty-Schießen",
        status_id: SM.IngameState.PausePS,
        can_end_game: false,
        optional: true,
        running: false,
    },
    {
        period: 5,
        short_title: "P",
        title: "Penalty-Schießen",
        status_id: SM.IngameState.PenaltyShots,
        can_end_game: true,
        optional: true,
        running: true,
    },
]


