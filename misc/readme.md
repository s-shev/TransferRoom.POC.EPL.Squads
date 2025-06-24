# EPL Squad Seeder

This is a one-time script that I used to populate the local SQLite database with EPL squad data for the 2024/25 season.

Script assumes the SQLite database schema already exists.

It’s not meant to be run in production or CI/CD – just local development setup.

## Data Sources

- **Teams & Squads API** (unoficial)

  - `https://footballapi.pulselive.com/football/teams?compSeasons=719&pageSize=100&altIds=true`
  - `https://footballapi.pulselive.com/football/teams/{teamId}/compseasons/719/staff?altIds=true`

- **Nicknames**  
  Loaded from `nicknames.js`, sourced manually from: [Sporting News - EPL Club Nicknames](https://www.sportingnews.com/us/soccer/news/premier-league-club-nicknames-full-list-2023-24-season/cxspzffyvk948qt2dhkfzk9c)

## How to Run

Install dependencies:

```
npm install
```

Run the seeder:

```
npm run seed
```
