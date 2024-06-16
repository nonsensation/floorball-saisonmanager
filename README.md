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

## Usage

Similar to this, kind of pseudocode for now:

```ts
import { SM } from 'floorball-saisonmanager'

const leagueId = 1234

const leagueUrl = SM.UrlBuilder.getLeagueUrl( leagueId )
const leagueResponse = await fetch( leagueUrl )
const league: SM.League = await leagueResponse.json()

const gamesUrl = SM.UrlBuilder.getMatchSheduleUrl( leagueId )
const gamesResponse = await fetch( gamesUrl )
const games: SM.Game[] = await gamesResponse.json()

const urlLogoHome = SM.UrlBuilder.getLogoUrl( game[0].home_team_small_logo );

...

<img src={urlLogoHome} />
```


## Static Cache

You can use staic cahed JSON files, that mirror the API from [floorball-saisonmanager-data](https://github.com/nonsensation/floorball-saisonmanager-data)

Clone/Copy the data over in your public/static folder.

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

Other routes require auth or login.  
`ID` is the identifier (integer) of the coresponding item, like league-ID, game-ID etc.