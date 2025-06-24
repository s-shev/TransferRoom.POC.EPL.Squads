import {
  db,
  insertPlayer,
  insertTeam,
  insertNickname,
  insertSquad,
} from "./db.js";
import { NICKNAMES } from "./nicknames.js";

const SEASON_2024_25_ID = 719;

function ensureOkResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
}

async function performImport() {
  const teamsResponse = await fetch(
    `https://footballapi.pulselive.com/football/teams?compSeasons=${SEASON_2024_25_ID}&pageSize=100&altIds=true`
  );
  ensureOkResponse(teamsResponse);
  const teamsModel = await teamsResponse.json();

  const players = [];
  const teams = [];
  const nicknames = [];
  const squads = [];

  let teamId = 0;
  let playerId = 0;

  for (const team of teamsModel.content) {
    teams.push([
      ++teamId,
      team.club.name,
      `https://resources.premierleague.com/premierleague/badges/100/${team.altIds.opta}.png`,
    ]);

    const teamNicknames = NICKNAMES[team.club.abbr];
    if (teamNicknames) {
      nicknames.push(...teamNicknames.map((n) => [teamId, n]));
    }

    const squadResponse = await fetch(
      `https://footballapi.pulselive.com/football/teams/${team.club.id}/compseasons/${SEASON_2024_25_ID}/staff?altIds=true`
    );
    ensureOkResponse(squadResponse);
    const squadModel = await squadResponse.json();

    for (const player of squadModel.players) {
      const bd = player.birth?.date?.millis
        ? new Date(player.birth.date.millis)
        : undefined;

      players.push([
        ++playerId,
        player.name.first,
        player.name.last,
        bd
          ? `${bd.getFullYear()}-${(bd.getMonth() + 1)
              .toString()
              .padStart(2, "0")}-${bd.getDate().toString().padStart(2, "0")}`
          : null,
        player.info.position,
        player.nationalTeam.country,
        `https://resources.premierleague.com/premierleague/photos/players/110x140/${player.altIds.opta}.png`,
      ]);

      squads.push([teamId, playerId, player.info.shirtNum]);
    }
  }

  const importTransaction = db.transaction(() => {
    // clean, just in case
    db.prepare("DELETE FROM Squads").run();
    db.prepare("DELETE FROM Nicknames").run();
    db.prepare("DELETE FROM Teams").run();
    db.prepare("DELETE FROM Players").run();

    players.forEach((player) => insertPlayer.run(...player));
    teams.forEach((team) => insertTeam.run(...team));
    nicknames.forEach((nickname) => insertNickname.run(...nickname));
    squads.forEach((squad) => insertSquad.run(...squad));
  });

  importTransaction();
}

performImport().catch((err) => {
  console.error("Error:", err.message);
});
