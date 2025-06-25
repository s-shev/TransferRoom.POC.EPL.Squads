# Frontend for TransferRoom.POC.EPL.Squads

This is the React + TypeScript frontend for the TransferRoom.POC.EPL.Squads project. It provides a user interface to browse English Premier League (EPL) teams and their squads for the 2024/25 season.

---

## Features

- Browse all EPL teams and their squads
- Search teams by name or nickname
- View detailed player information (position, nationality, shirt number)
- Responsive design using Material UI
- Consumes the backend API

---

## Getting Started

### Prerequisites

- [Node.js (v18+)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Running the Frontend

1. Navigate to this folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set the backend API URL in `.env.development` (if needed):
   ```
   VITE_API_URL=https://localhost:7206/api
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

- `src/` — Main application source code
- `public/` — Static assets and HTML template

---

## Notes

- The frontend expects the backend API to be running and accessible at the URL specified in `VITE_API_URL`.
- For demo and deployment details, see the main [README](../README.md).

---

## License

MIT License. See [LICENSE](../LICENSE) for details.
