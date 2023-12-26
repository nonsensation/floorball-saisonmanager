
import type { Game, IngameState, PeriodTitle } from "./Game"


export interface MatchResult extends Game
{
    result_string?: string
    result?: Result
}

// https://saisonmanager.de/api/v2/games/32217.json

export interface MatchReport extends Game
{
    events: Event[]
    players: Players[]
    period_titles?: PeriodTitle[]
    audience: number
    game_status: GameState
    ingame_status: IngameState
    live_stream_link?: string
    home_team_id: number
    guest_team_id: number
    start_time?: string
    actual_start_time?: string
    deletable: boolean
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

export interface Result
{
    home_goals: number
    guest_goals: number
    home_goals_period: number[]
    guest_goals_period: number[]
    postfix: ResultPostfix
    forfait: boolean
    overtime: boolean
}

export interface ResultPostfix
{
    short: string
    long: string
}

export enum GameState
{
    Ended = 'ended',
    NoRecord = 'no_record',
    // started?
}

