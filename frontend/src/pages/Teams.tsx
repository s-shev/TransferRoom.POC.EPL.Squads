import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";
import SearchOff from "@mui/icons-material/SearchOff";
import { TeamsList } from "../components/TeamsList";
import { SearchBar } from "../components/SearchBar";
import { useTeams } from "../contexts/TeamsContext";

export function Teams() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");
  const { teams } = useTeams();

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

  return (
    <Stack direction="column" width="100%">
      <SearchBar />

      <Container maxWidth="md">
        {filteredTeams.length ? (
          <TeamsList teams={filteredTeams} />
        ) : (
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
        )}
      </Container>
    </Stack>
  );
}
