import type { GameOperation } from "./Operation"
import type { Season } from "./Season"


export interface Init
{
    seasons: Season[]
    current_season_id: number
    game_operations: GameOperation[]
}

