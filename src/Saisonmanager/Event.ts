

export interface Event
{
    event_id: number
    event_type: EventType
    event_team: EventTeam
    period: number
    home_goals: number
    guest_goals: number
    time: string
    sortkey: string
}

export interface PlayerEvent extends Event
{
    number: number // 1000 == GoalType.Owngoal
}

export interface GoalEvent extends PlayerEvent
{
    assist: number
    goal_type: GoalType
    goal_type_string: string
}

export interface PenaltyEvent extends PlayerEvent
{
    penalty_type: PenaltyType
    penalty_type_string: string
    penalty_reason: number // PenaltyReason
    penalty_reason_string: string
}

export enum EventType
{
    Goal = 'goal',
    Timeout = 'timeout',
    Penalty = 'penalty', // Strafe
}

export enum EventTeam
{
    Home = 'home',
    Guest = 'guest',
}

export enum GoalType
{
    Regular = 'regular',
    Owngoal = 'owngoal',
    PenaltyShot = 'penalty_shot',
}

export enum PenaltyReason
{
    // 907 Stoßen
}

export enum PenaltyType
{
    Penalty_2 = 'penalty_2',
    Penalty_2and2 = 'penalty_2and2',
    Penalty_5 = 'penalty_5',
    Penalty_10 = 'penalty_10',
    Penalty_ms_tech = 'penalty_ms_tech',
    Penalty_ms_full = 'penalty_ms_full',
    Penalty_ms1 = 'penalty_ms1',
    Penalty_ms2 = 'penalty_ms2',
    Penalty_ms3 = 'penalty_ms3',
}

export interface PenaltyInfo
{
    code: number
    active: boolean
    description: string
    id: number
}

export interface Penalty
{
    name: string
    order: number
    mapping: PenaltyType
    description: string
    id: string
}
