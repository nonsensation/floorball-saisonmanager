# Typescript Package for [Saisonmanager.de](https://saisonmanager.de)

This package allows to get current match shedule, gaames, leagues, logos, match results, ...
that are all also shown in [saisonmanager.de](https://saisonmanager.de) via their API endpoints.

This allows to have the current games, placements etc in a clubs homepage to be presented automatically.

This is **_not an official package_** for Saisonmanager, I just created this library on my own instead of scraping Saisonmanagers website, I use their endpoints.

## Install

Via `pnpm` (same as `npm`):

```
pnpm i git+https://github.com/nonsensation/floorball-saisonmanager.git
```

Or with a specific version (see [Releases](https://github.com/nonsensation/floorball-saisonmanager/releases)):

```
pnpm i git+https://github.com/nonsensation/floorball-saisonmanager.git#v0.1.0
```

In _packacke.json_ the entry should appear:

```
{
	"dependencies": {
		"floorball-saisonmanager": "github:nonsensation/floorball-saisonmanager#v0.1.0"
	}
}
```

## Uninstall

```
pnpm remove floorball-saisonmanager
```

## Usage

Similar to this, kind of pseudocode for now:

```ts
import { Saisonmanager as SM } from 'floorball-saisonmanager'

const leaguesResponse = await fetch( "https://saisonmanager.de/api/v2/leagues.json" )
const leagues : SM.League[] = await leaguesResponse.json()
```

## Structure (public)

```
├── init.json
├── leagues.json
├── games.json
├── games
│   └── ID.json
├── game_operations
│   └── ID
│       └── leagues
│           └── ID.json
├── leagues
│   ├── ID.json
│   └── ID
│       ├── schedule.json
│       ├── game_days
│       │   ├── ID
│       │   │   └── schedule.json
│       │   └── current
│       │       └── schedule.json
│       ├── table.json
│       ├── grouped_table.json
│       └── scorer.json
├── admin
│   └── leagues
│       └── ID
│           └── additional_references.json
└── user
    └── leagues
        ├── penalties.json
        └── penalty_codes.json
```

## Endpoints

|Endpoint|Type|Example|
|--------|----|--------|
|`init.json` | ``ApiV2.Init` | https://saisonmanager.de/api/v2/init.json |
|`leagues.json` | ``ApiV2.League[]` | https://saisonmanager.de/api/v2/leagues.json |
|`user/leagues/penalties.json` | ``ApiV2.Penalty[]` | https://saisonmanager.de/api/v2/user/leagues/penalties.json |
|`user/leagues/penalty_codes.json` | ``ApiV2.PenaltyCode[]` | https://saisonmanager.de/api/v2/user/leagues/penalty_codes.json |
|`game_operations/1/leagues.json` | ``ApiV2.League[]` | https://saisonmanager.de/api/v2/game_operations/1/leagues.json |
|`admin/leagues/1396/additional_references.json` | ``ApiV2.AdditionalReference` | https://saisonmanager.de/api/v2/admin/leagues/1396/additional_references.json |
|`games/35497.json` | ``ApiV2.Game` | https://saisonmanager.de/api/v2/games/35497.json |
|`leagues/1375/game_days/current/schedule.json` | ``ApiV2.GameDay[]` | https://saisonmanager.de/api/v2/leagues/1375/game_days/current/schedule.json |
|`leagues/1375/game_days/1/schedule.json` | ``ApiV2.GameDay[]` | https://saisonmanager.de/api/v2/leagues/1375/game_days/1/schedule.json |
|`leagues/1564/grouped_table.json` | ``ApiV2.Team[]` | https://saisonmanager.de/api/v2/leagues/1564/grouped_table.json |
|`leagues/1396.json` | ``ApiV2.LeagueWithSimilarLeagues` | https://saisonmanager.de/api/v2/leagues/1396.json |
|`leagues/1396/schedule.json` | ``ApiV2.ScheduledGame[]` | https://saisonmanager.de/api/v2/leagues/1396/schedule.json |
|`leagues/1396/scorer.json` | ``ApiV2.Scorer[]` | https://saisonmanager.de/api/v2/leagues/1396/scorer.json |
|`leagues/1564/grouped_table.json` | ``ApiV2.GroupedTable` | https://saisonmanager.de/api/v2/leagues/1564/grouped_table.json |


Other routes require auth or login.  
`ID` is the identifier (integer) of the coresponding item, like league-ID, game-ID etc.

## Static Cache

To not flood the original Saisonmanager with too many calls,
you can use static cached JSON files,
that mirror the API from [floorball-saisonmanager-data](https://github.com/nonsensation/floorball-saisonmanager-data).

Especially for legacy leagues with static, never changing data this might be useful.

[floorball-saisonmanager-data](https://github.com/nonsensation/floorball-saisonmanager-data) is only to some dregree filled with the latest data, as it need to fetch it from saisonmanager on intervals itself.

Clone/Copy the data over in your public/static folder.


## TODO

- live updates, also on static cache
- docs
- login?
