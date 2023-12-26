
import type { Arena } from "./Arena"
import type { Team, Club } from "./Team"


export const SmBaseUrl = 'https://saisonmanager.de'
export const SmApi = `${ SmBaseUrl }/api/v2`



export class Saisonmanager
{
    fetch: any = null

    constructor ( fetch: () => Promise<void> )
    {
        this.fetch = fetch
    }

    async getAdminLeagueAdditionalReferencesUrl( leagueId: number ): Promise<{ arenas: Arena, teams: Team, clubs: Club }>
    {
        const url = UrlBuilder.getAdminLeagueAdditionalReferencesUrl( leagueId )
        const response = await this.fetch( url )
        const json = await response.json()

        return {
            arenas: json[ 'arenas' ],
            teams: json[ 'teams' ],
            clubs: json[ 'clubs' ],
        }
    }
}

// https://saisonmanager.de/api/v2/game_operations/6/leagues.json

export class UrlBuilder
{
    public static getAdminLeagueAdditionalReferencesUrl( leagueId: number )
    {
        return `${ apiUrl }/admin/leagues/${ leagueId }/additional_references.json`
    }

    public static getMatchSheduleUrl = function ( leagueId: number ): string
    {
        return `${ SmApi }/leagues/${ leagueId }/schedule.json`
    }

    public static getLogoUrl = function ( logoPath: string ): string
    {
        console.assert( logoPath.startsWith( '/' ) )
        return `${ SmBaseUrl }${ logoPath }`
    }

    public static getMatchReportUrl = function ( gameId: number, leagueId: number, operationSlug: string ): string
    {
        // https://saisonmanager.de/game_operation_slug/league_id/spiel/game_id
        // https://saisonmanager.de/ost/1396/spiel/32215
        return `${ SmBaseUrl }/${ operationSlug }/${ leagueId }/spiel/${ gameId }`
    }

    public static getLeagueUrl = function ( leagueId: number ): string
    {
        // https://saisonmanager.de/api/v2/leagues/1396.json
        return `${ SmApi }/leagues/${ leagueId }.json`
    }

    public static getPenaltyCodesUrl = function (): string
    {
        // returns PenaltyInfo[]
        return `${ SmApi }/user/leagues/penalty_codes.json`
    }

    public static getPenaltiesUrl = function (): string
    {
        // returns Penalty[]
        return `${ SmApi }/user/leagues/penalties.json`
    }
}


