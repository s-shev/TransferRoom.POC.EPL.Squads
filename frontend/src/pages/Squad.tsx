import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useTeams } from "../contexts/TeamsContext";
import { useMemo } from "react";
import {
  Avatar,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { PlayersList } from "../components/PlayersList";

export function Squad() {
  const { teamId } = useParams();
  const { teams } = useTeams();
  const navigate = useNavigate();

  const team = useMemo(() => {
    return teams.find((t) => t.id.toString() === teamId);
  }, [teams, teamId]);

  if (!team) {
    return <Navigate to="/teams" />;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="flex-start"
        mb={2}
      >
        <IconButton onClick={() => navigate("/teams")} aria-label="back">
          <ArrowBack />
        </IconButton>

        <Avatar
          src={team.logoUrl}
          alt={team.name}
          sx={{ width: 48, height: 48 }}
        />

        <Typography variant="h4" component="h1">
          {team.name}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 4 }} />

      <PlayersList teamId={team.id} />
    </Container>
  );
}
