import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { getTeams, type Team } from "../api/teams";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { SearchOff } from "@mui/icons-material";
import { TeamsList } from "../components/TeamsList";
import { SearchBar } from "../components/SearchBar";

export function Teams() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string>();

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");

  useEffect(() => {
    let isMounted = true;

    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        if (isMounted) {
          setTeams(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load teams");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTeams();

    return () => {
      isMounted = false; // cleanup on unmount
    };
  }, []);

  const filteredTeams = useMemo(() => {
    if (!searchText) return teams;

    const searchLower = searchText.toLowerCase();

    return teams
      .filter(
        (team) =>
          team.name.toLowerCase().includes(searchLower) ||
          team.nicknames?.some((nickname) =>
            nickname.toLowerCase().includes(searchLower)
          )
      )
      .sort((left, right) => left.name.localeCompare(right.name));
  }, [teams, searchText]);

  let content: ReactNode;

  if (loading) {
    content = (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    content = <Alert severity="error">{error}</Alert>;
  } else if (!filteredTeams.length) {
    content = (
      <>
        <SearchOff sx={{ fontSize: 60, color: "text.secondary" }} />
        <Typography variant="h6" color="text.secondary">
          No teams found
        </Typography>
        {searchText && (
          <Typography variant="body2" color="text.secondary">
            Try a different name or nickname.
          </Typography>
        )}
      </>
    );
  } else {
    content = <TeamsList teams={filteredTeams} />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <SearchBar />
      <Container maxWidth="md">{content}</Container>
    </Box>
  );
}
