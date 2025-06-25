# Backend for TransferRoom.POC.EPL.Squads

This is the ASP.NET Core Web API backend for the TransferRoom.POC.EPL.Squads project. It provides endpoints to access English Premier League (EPL) teams and their squads for the 2024/25 season.

---

## Features

- RESTful API for EPL teams and squads
- Data stored in a pre-seeded SQLite database (`epl_24_25.db`)
- Entity Framework Core for data access
- Swagger UI for API documentation

---

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)

### Running the API

1. Navigate to this folder:
   ```sh
   cd backend/TransferRoom.POC.EPL.SquadApi
   ```
2. Run the API:
   ```sh
   dotnet run
   ```
   The API will be available at `https://localhost:7206` or `http://localhost:5123` (see launch settings).

### Database

- The SQLite database (`epl_24_25.db`) is included and already seeded with EPL teams and squads.
- No setup is required unless you want to update the data (see root README for seeding instructions).

---

## API Endpoints

- `GET /api/teams` — List all teams (supports `?search=`)
- `GET /api/teams/{id}` — Get team by ID
- `GET /api/teams/{id}/squad` — Get squad for a team

Swagger UI is available at `/swagger` when running in development.

---

## Project Structure

- `TransferRoom.POC.EPL.SquadApi/` — Main API project
- `epl_24_25.db` — SQLite database file

---

## License

MIT License. See [LICENSE](../LICENSE) for details.