# TransferRoom.POC.EPL.Squads

This project is a proof of concept for managing and displaying English Premier League (EPL) team squads for the 2024/25 season. It consists of a .NET backend API and a React + TypeScript frontend.

---

## Features

- Browse all EPL teams and their squads for the 2024/25 season
- Search teams by name or nickname
- View detailed player information, including position, nationality, and shirt number
- Responsive UI built with Material UI

---

## Project Structure

- **backend/**  
  ASP.NET Core Web API (.NET 8) with Entity Framework Core and SQLite database.  
  Provides endpoints for teams and squads.

- **frontend/**  
  React + TypeScript SPA using Vite and Material UI.  
  Consumes the backend API to display teams and squads.

- **misc/**  
  Data seeder scripts for populating the SQLite database with EPL data.

---

## Demo & CI/CD

This solution is configured for CI/CD deployment with [Render.com](https://render.com/).  
You can view the live demo site here: [https://epl-squads-24-25-poc.onrender.com/](https://epl-squads-24-25-poc.onrender.com/)

> **Note:** The demo is hosted on Render.com's free plan. The backend API may "sleep" when not in use, so the first API call after a period of inactivity can take up to 50 seconds or may even time out. If this happens, simply refresh or retry after a short wait.
---

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js (v18+)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 1. Database Setup

> **Note:** The SQLite database (`backend/TransferRoom.POC.EPL.SquadApi/epl_24_25.db`) is already included in the repository and pre-seeded with EPL teams and squads data.  
> You do **not** need to run any seeding scripts to get started.

If you wish to re-seed or update the database in the future:

1. Navigate to `misc/` and install dependencies:
   ```sh
   cd misc
   npm install
   ```
2. Run the data seeder:
   ```sh
   npm run seed
   ```
   This will fetch the latest EPL teams and squads and update the database file.

### 2. Backend API

1. Navigate to `backend/TransferRoom.POC.EPL.SquadApi`:
   ```sh
   cd backend/TransferRoom.POC.EPL.SquadApi
   ```
2. Run the API:
   ```sh
   dotnet run
   ```
   The API will be available at `https://localhost:7206` or `http://localhost:5123` (see launch settings).

### 3. Frontend

1. Navigate to `frontend/` and install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Set the API URL in `.env.development`:
   ```
   VITE_API_URL=https://localhost:7206/api
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## API Endpoints

- `GET /api/teams` — List all teams (supports `?search=`)
- `GET /api/teams/{id}` — Get team by ID
- `GET /api/teams/{id}/squad` — Get squad for a team

See Swagger UI at `/swagger` when running the backend in development.

---

## Notes

- This project is for demonstration purposes only and is not an official TransferRoom product.
- Data sources:
  - [footballapi.pulselive.com](https://footballapi.pulselive.com/) (unofficial EPL data)
  - [Sporting News EPL Club Nicknames](https://www.sportingnews.com/us/soccer/news/premier-league-club-nicknames-full-list-2023-24-season/cxspzffyvk948qt2dhkfzk9c)

---

## License

MIT License. See [LICENSE](LICENSE) for details.
