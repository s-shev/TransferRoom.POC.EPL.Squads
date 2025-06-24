import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(
  __dirname,
  "../../backend/TransferRoom.POC.EPL.SquadApi/TransferRoom.POC.EPL.SquadApi/epl_24_25.db"
);

export const db = new Database(dbPath);

export const insertPlayer = db.prepare(`
  INSERT INTO Players (Id, FirstName, LastName, DateOfBirth, Position, NationalTeam, PhotoUrl)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

export const insertTeam = db.prepare(`
  INSERT OR IGNORE INTO Teams (Id, Name, LogoUrl)
  VALUES (?, ?, ?)
`);

export const insertNickname = db.prepare(`
  INSERT OR IGNORE INTO Nicknames (TeamId, Nickname)
  VALUES (?, ?)
`);

export const insertSquad = db.prepare(`
  INSERT INTO Squads (TeamId, PlayerId, ShirtNumber)
  VALUES (?, ?, ?)
`);
