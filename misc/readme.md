# EPL Squad Seeder

This folder contains a one-time script used to populate or update the local SQLite database with EPL squad data for the 2024/25 season.

> **Note:** You do **not** need to run this script for normal usage. The database is already included and seeded.  
> Only use this if you want to refresh or update the data.

Running the seeder will overwrite existing data in `../backend/TransferRoom.POC.EPL.SquadApi/epl_24_25.db`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- The SQLite database schema must already exist at:
  ```
  ../backend/TransferRoom.POC.EPL.SquadApi/epl_24_25.db
  ```

## Data Sources

- **Teams & Squads API** (unofficial)
  - `https://footballapi.pulselive.com/football/teams?compSeasons=719&pageSize=100&altIds=true`
  - `https://footballapi.pulselive.com/football/teams/{teamId}/compseasons/719/staff?altIds=true`
- **Nicknames**  
  Loaded from `nicknames.js`, sourced manually from: [Sporting News - EPL Club Nicknames](https://www.sportingnews.com/us/soccer/news/premier-league-club-nicknames-full-list-2023-24-season/cxspzffyvk948qt2dhkfzk9c)

## How to Run

Install dependencies:
```sh
npm install
```

Run the seeder:
```sh
npm run seed
```