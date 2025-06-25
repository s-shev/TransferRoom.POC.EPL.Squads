import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Stack,
  Divider,
  CardMedia,
} from "@mui/material";
import type { Player } from "../api/teams";
import { useState } from "react";

export function PlayerModal({
  player,
  onClose,
}: {
  player: Player;
  onClose: () => void;
}) {
  const [imgSrc, setImgSrc] = useState(player.photoUrl);

  return (
    <Dialog open onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        {player.firstName} {player.lastName}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center">
          <CardMedia
            component="img"
            image={imgSrc}
            alt={`${player.firstName} ${player.lastName}`}
            sx={{
              width: "110px",
              height: "140px",
              objectFit: "cover",
              mx: "auto",
              mt: 2,
              borderRadius: 1,
            }}
            onError={() => setImgSrc("/no-photo.png")}
          />

          <Divider sx={{ width: "100%" }} />

          <Typography>
            <strong>Position:</strong> {positionLabel(player.position)}
          </Typography>
          <Typography>
            <strong>Nationality:</strong> {player.nationalTeam}
          </Typography>
          {player.shirtNumber && (
            <Typography>
              <strong>Shirt Number:</strong> #{player.shirtNumber}
            </Typography>
          )}
          {player.dateOfBirth && (
            <Typography>
              <strong>Date of Birth:</strong> {player.dateOfBirth}
            </Typography>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

function positionLabel(pos: string): string {
  switch (pos) {
    case "G":
      return "Goalkeeper";
    case "D":
      return "Defender";
    case "M":
      return "Midfielder";
    case "F":
      return "Forward";
    default:
      return pos;
  }
}
