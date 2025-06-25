import { Box, Grid, Typography } from "@mui/material";
import type { Player } from "../api/teams";
import { PlayerCard } from "./PlayerCard";
import { useState } from "react";
import { PlayerModal } from "./PlayerModal";

export function PositionPlayers({
  position,
  players,
}: {
  position: string;
  players: Player[];
}) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  return (
    <Box mb={4}>
      <Typography variant="h5" component="h2" gutterBottom>
        <strong>{position}</strong>
      </Typography>

      <Grid container spacing={2}>
        {players.map((player) => (
          <Grid key={player.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <PlayerCard
              player={player}
              onClick={() => setSelectedPlayer(player)}
            />
          </Grid>
        ))}
      </Grid>

      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(undefined)}
        />
      )}
    </Box>
  );
}
