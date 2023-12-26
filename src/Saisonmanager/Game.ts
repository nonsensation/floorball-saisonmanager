
export interface Game
{
    game_id: number
    game_number: number
    game_day: number
    arena: number
    arena_name: string
    arena_address: string
    arena_short: string
    hosting_club: string
    game_day_id: number
    date: string
    time: string
    started: boolean
    ended: boolean
    home_team_name: string
    home_team_logo: string
    home_team_small_logo: string
    guest_team_name: string
    guest_team_logo: string
    guest_team_small_logo: string
    nominated_referee_string: string
    referees: Referee[]
    notice_type: string
    notice_string: string
    state: IngameState
    current_period_title: PeriodTitle
    group_identifier?: string
    series_title?: string
    series_number?: string
    home_team_filling_rule?: string
    home_team_filling_title?: string
    home_team_filling_parameter?: string
    guest_team_filling_rule?: string
    guest_team_filling_title?: string
    guest_team_filling_parameter?: string
}

export interface Referee
{
    license_id: string
    first_name: string
    last_name: string
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
    short_title: string
    title: string
    status_id: IngameState
    can_end_game: boolean
    optional: boolean
    running: boolean
}

export type PeriodNumber = 1 | 2 | 3 | 4 // 5?




