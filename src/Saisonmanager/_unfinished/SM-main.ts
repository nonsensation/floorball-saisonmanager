


const apiUrl: string = `https://saisonmanager.de/api/v2`


function get( url: string )
{
}

function put( url: string, value: any )
{
}
function post( url: string, value: any )
{
}

function _delete( url: string, x: any = null )
{
}


class Endpoints
{
    // 1st chunk

    getLeagues( V: any, pe: any )
    {
        return get( `${ apiUrl }/game_operations/${ V }/leagues/${ pe }.json` ) // League[]
    }
    getSingleLeague( V: any )
    {
        return get( `${ apiUrl }/leagues/${ V }.json` ) // League
    }
    getGameSchedule( V: any )
    {
        return get( `${ apiUrl }/leagues/${ V }/schedule.json` ) // MatchResult[]
    }
    getGameScheduleForGameDay( V: any, pe: any )
    {
        return get( `${ apiUrl }/leagues/${ V }/game_days/${ pe }/schedule.json` ) // MatchResult[]
    }
    getGameScheduleForCurrentGameDay( V: any )
    {
        return get( `${ apiUrl }/leagues/${ V }/game_days/current/schedule.json` ) // MatchResult[]
    }
    getTable( V: any )
    {
        return get( `${ apiUrl }/leagues/${ V }/table.json` ) // TeamStats[]
    }
    getGroupedTable( V: any )
    {
        return get( `${ apiUrl }/leagues/${ V }/grouped_table.json` ) // []
    }
    getScorer( V: any )
    {
        return get( `${ apiUrl }/leagues/${ V }/scorer.json` ) // PlayerStats[]
    }
    getAdminLeagues()
    {
        return get( `${ apiUrl }/admin/leagues.json` ) // no auth
    }
    getAdminGameDay( V: any )
    {
        return get( `${ apiUrl }/game_days/${ V }.json` ) // no auth
    }
    adminCreateGameDay( V: any )
    {
        return post( `${ apiUrl }/game_days.json`, V ) // no auth
    }
    adminUpdateGameDay( V: any )
    {
        return put( `${ apiUrl }/game_days/${ V.id || 0 }.json`, V )
    }

    adminDestroyGameDay( V: any )
    {
        return _delete( `${ apiUrl }/game_days/${ V }.json`, {} )
    }
    adminCreateLeagues( V: any )
    {
        return post( `${ apiUrl }/admin/leagues.json`, V )
    }
    getAdminLeagueinterfacees()
    {
        return get( `${ apiUrl }/admin/league_interfacees.json` ) // no login
    }
    getLeagueWithTeams( V: any )
    {
        return get( `${ apiUrl }/admin/leagues/${ V }/teams.json` ) // no login
    }
    getAdminGameSchedule( V: any )
    {
        return get( `${ apiUrl }/admin/leagues/${ V }/game_schedule.json` ) // no login
    }
    getAdminLeagueAdditionalReferences( V: any )
    {
        return get( `${ apiUrl }/admin/leagues/${ V }/additional_references.json` ) // works
    }
    adminImportGameSchedule( V: any )
    {
        return post( `${ apiUrl }/admin/leagues/import_schedule.json`, V )
    }
    adminCreateTeam( V: any )
    {
        return post( `${ apiUrl }/admin/teams.json`, V ) // 404
    }
    adminGetTeam( V: any )
    {
        return get( `${ apiUrl }/admin/teams/${ V }.json` ) // no auth
    }
    getLeagueClubs( V: any, pe: any )
    {
        return get( `${ apiUrl }/admin/league/clubs/${ pe }/${ V }.json` ) // no auth
    }
    getAdminLeagueLicenses( V: any )
    {
        return get( `${ apiUrl }//admin/leagues/${ V }/licenses.json` ) // no auth
    }
    getUserLeagueLicenses( V: any )
    {
        return get( `${ apiUrl }//user/leagues/${ V }/licenses.json` ) // no auth
    }
    getUserLeaguesLicenseIndex()
    {
        return get( `${ apiUrl }/user/leagues/licenses/index.json` ) //no login
    }


    // 2nd chunk


    userCreateLicenseRequest( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/players/${ V }/request_license.json`, {
            team_id: pe
        } )
    }
    userWithdrawLicenseRequest( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/players/${ V }/withdraw_license.json`, {
            license_id: pe
        } )
    }

    // 3rd chunk



    /* [] mit:
        id	1318
        game_number	"50"
        start_time	"13:30"
        audience	null|number
    */
    createGame( V: any )
    {
        return post( `${ apiUrl }/games.json`, V ) //
    }
    updateGame( V: any )
    {
        return put( `${ apiUrl }/games/${ V.id || 0 }.json`, {} )
    }
    updateGameRating( V: any, pe: any )
    {
        return put( `${ apiUrl }/games/${ V }.json`, {
            forfait: pe
        } )
    }
    deleteGame( V: any )
    {
        return _delete( `${ apiUrl }/games/${ V.id || 0 }.json` )
    }
    addLineupPlayerToGame( V: any, pe: any, He: any, ot: any, at: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/lineup/${ pe }/add_player.json`, {
            player_id: He,
            trikot_number: ot,
            goalkeeper: at
        } )
    }
    removeLineupPlayerToGame( V: any, pe: any, He: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/lineup/${ pe }/remove_player.json`, {
            trikot_number: parseInt( He, 10 )
        } )
    }
    setLineupCaptain( V: any, pe: any, He: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/lineup/${ pe }/set_captain.json`, {
            trikot_number: parseInt( He, 10 )
        } )
    }
    addEvent( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/events/add.json`, pe )
    }
    setGameFlags( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/set_flag.json`, pe )
    }
    setGameField( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/set_field.json`, pe )
    }
    setReferee( V: any, pe: any, He: any, ot: any, at: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/referees/${ pe }.json`, {
            license_id: He || "",
            firstname: at,
            lastname: ot
        } )
    }
    setCoach( V: any, pe: any, He: any, ot: any, at: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/lineup/${ pe }/add_coach/${ He }.json`, {
            first_name: ot,
            last_name: at
        } )
    }

    deleteEvent( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/events/remove.json`, {
            event_id: pe
        } )
    }
    setGameStatus( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/game_status.json`, {
            game_status: pe
        } )
    }
    setInGameStatus( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/games/${ V }/game_status.json`, {
            ingame_status: pe
        } )
    }



    adminCreateOrUpdatePlayer( V: any )
    {
        return post( `${ apiUrl }/admin/players.json`, V )
    }
    adminAddAdditionalClub( V: any, pe: any )
    {
        return post( `${ apiUrl }/admin/players/${ V }/add_additional_club.json`, {
            player_id: V,
            club_id: parseInt( pe, 10 )
        } )
    }
    adminRemoveAdditionalClub( V: any, pe: any, He: any )
    {
        return post( `${ apiUrl }/admin/players/${ V }/remove_additional_club.json`, {
            player_id: V,
            club_id: parseInt( pe, 10 ),
            valid_until: He
        } )
    }
    adminTransferPlayer( V: any, pe: any )
    {
        return post( `${ apiUrl }/admin/players/${ V }/transfer.json`, {
            player_id: V,
            club_id: parseInt( pe, 10 )
        } )
    }
    updateLicenseStatus( V: any, pe: any, He: any, ot: any )
    {
        return post( `${ apiUrl }/admin/players/${ V }/handle_license_request.json`, {
            player_id: V,
            license_id: pe,
            license_status_id: He,
            reason: ot
        } )
    }
    reenableLicenseRequest( V: any, pe: any )
    {
        return post( `${ apiUrl }/user/players/${ V }/reenable_license_request.json`, {
            license_id: pe
        } )
    }


    // 5th chunk



    // works

    getPenalties()
    {
        return get( `${ apiUrl }/user/leagues/penalties.json` )
    }
    getPenaltyCodes()
    {
        return get( `${ apiUrl }/user/leagues/penalty_codes.json` )
    }

    getInit()
    {
        return get( `${ apiUrl }/init.json` )
    }

    getGame( V: any )
    {
        return get( `${ apiUrl }/games/${ V }.json` )
    }

    // 404

    getArenas()
    {
        return get( `${ apiUrl }/arenas.json` )
    }

    login( V: any, pe: any )
    {
        return post( `${ apiUrl }/login.json`, {
            username: V,
            password: pe
        } )
    }

    logout()
    {
        return post( `${ apiUrl }/logout.json`, {} )
    }

    lostPassword( V: any )
    {
        return post( `${ apiUrl }/lost_password.json`, {
            username: V,
        } )
    }

    resetPassword( V: any, pe: any, He: any )
    {
        return post( `${ apiUrl }/reset_password.json`, {
            user: {
                password: pe,
                password_confirmation: He
            },
            reset_token: V
        } )
    }


    // not authed

    getAdminGameOperations()
    {
        return get( `${ apiUrl }/admin/game_operations.json` )
    }

    getRefereeByLicenseNumber( V: any )
    {
        return get( `${ apiUrl }/user/referees/${ V }.json` )
    }

    getNations()
    {
        return get( `${ apiUrl }/user/players/nations.json` )
    }

    getClubPlayers( V: any )
    {
        return get( `${ apiUrl }/admin/clubs/${ V }/players.json` )
    }

    getPlayer( V: any )
    {
        return get( `${ apiUrl }/admin/players/${ V }.json` )
    }

    getAdditionalFields( V: any )
    {
        return get( `${ apiUrl }/user/games/${ V }/additional_fields.json` )
    }
    userGetTeamLicenses( V: any )
    {
        return get( `${ apiUrl }/user/team/${ V }/licenses.json` )
    }

    getAdminClubs()
    {
        return get( `${ apiUrl }/admin/clubs.json` )
    }
    getAdminClub( V: any )
    {
        return get( `${ apiUrl }/admin/clubs/${ V }.json` )
    }
    getAdminTeam( V: any )
    {
        return get( `${ apiUrl }/admin/teams/${ V }.json` )
    }
    getAdminClubAll()
    {
        return get( `${ apiUrl }/admin/clubs/all.json` )
    }
    adminCreateClub( V: any )
    {
        return post( `${ apiUrl }/admin/clubs.json`, V )
    }
    adminGetClubAndTeams()
    {
        return get( `${ apiUrl }/user/clubs_and_teams.json` )
    }

}

