import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Player } from "../api/teams";
import { useState } from "react";

export function PlayerCard({
  player,
  onClick,
}: {
  player: Player;
  onClick?: () => void;
}) {
  const [imgSrc, setImgSrc] = useState(player.photoUrl);

  return (
    <CardActionArea onClick={onClick}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          p: 2,
          gap: 1,
        }}
      >
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

        <CardContent sx={{ p: 0, alignSelf: "start", flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {player.firstName} {player.lastName}
          </Typography>

          <Typography variant="body2">{player.nationalTeam}</Typography>

          {player.shirtNumber !== null && (
            <Typography variant="body2">#{player.shirtNumber}</Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
