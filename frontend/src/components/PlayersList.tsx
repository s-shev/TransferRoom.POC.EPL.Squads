import { useEffect, useState } from "react";
import { getSquad, type Player, type Position } from "../api/teams";
import { Spinner } from "./Spinner";
import { ErrorBox } from "./Error";
import { Stack } from "@mui/material";
import { PositionPlayers } from "./PositionPlayers";

type PlayersByPosition = Record<Position, Player[]>;
const POSITION_DISPLAY_ORDER: { position: Position; text: string }[] = [
  { position: "G", text: "Goalkeepers" },
  { position: "D", text: "Defenders" },
  { position: "M", text: "Midfielders" },
  { position: "F", text: "Forwards" },
];

export function groupPlayersByPosition(players: Player[]): PlayersByPosition {
  const result: PlayersByPosition = {
    G: [],
    D: [],
    M: [],
    F: [],
  };

  for (const player of players) {
    result[player.position].push(player);
  }

  // sort by shirt number
  for (const position of Object.keys(result) as Position[]) {
    result[position].sort((a, b) => {
      if (a.shirtNumber === null) return 1;
      if (b.shirtNumber === null) return -1;
      return a.shirtNumber - b.shirtNumber;
    });
  }

  return result;
}

export function PlayersList({ teamId }: { teamId: number }) {
  const [players, setPlayers] = useState<PlayersByPosition>({
    G: [],
    D: [],
    M: [],
    F: [],
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let isMounted = true;

    const fetchTeams = async () => {
      try {
        const data = await getSquad(teamId);
        if (isMounted) {
          setPlayers(groupPlayersByPosition(data ?? []));
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load team squad");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTeams();

    return () => {
      isMounted = false;
    };
  }, [teamId]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorBox error={error} />;
  }

  return (
    <Stack direction="column">
      {POSITION_DISPLAY_ORDER.map((p) => (
        <PositionPlayers
          key={p.position}
          position={p.text}
          players={players[p.position]}
        />
      ))}
    </Stack>
  );
}
