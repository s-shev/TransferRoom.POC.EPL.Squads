import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import type { Team } from "../api/teams";
import { Link } from "react-router-dom";

export function TeamsList({ teams }: { teams: Team[] }) {
  return (
    <Grid container spacing={3} sx={{ margin: "0 auto", p: 2 }}>
      {teams.map((team) => (
        <Grid size={{ xs: 12, sm: 6 }} key={team.id}>
          <Card
            variant="outlined"
            component={Link}
            to={`/teams/${team.id}`}
            sx={{
              display: "flex",
              textDecoration: "none",
              color: "inherit",
              "&:hover": { boxShadow: 6 },
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 100, objectFit: "contain", p: 1 }}
              image={team.logoUrl}
              alt={`${team.name} logo`}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" component="div">
                {team.name}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 1, flexWrap: "wrap", gap: "4px" }}
              >
                {team.nicknames?.map((nickname, index) => (
                  <Chip
                    key={index}
                    label={nickname}
                    size="small"
                    style={{ margin: 0 }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Stack spacing={3} sx={{ margin: "0 auto", p: 2 }}>
      {teams.map((team) => (
        <Card
          key={team.id}
          variant="outlined"
          component={Link}
          to={`/teams/${team.id}`}
        >
          <CardActionArea
            sx={{
              display: "flex",
              "&:hover": {
                backgroundColor: "action.selectedHover",
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 100, objectFit: "contain", p: 1 }}
              image={team.logoUrl}
              alt={`${team.name} logo`}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" component="div">
                {team.name}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ m: 0, mt: 1, flexWrap: "wrap", gap: "2px" }}
              >
                {team.nicknames?.map((nickname) => (
                  <Chip
                    key={nickname}
                    label={nickname}
                    size="small"
                    style={{ margin: 0 }}
                  />
                ))}
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
}
