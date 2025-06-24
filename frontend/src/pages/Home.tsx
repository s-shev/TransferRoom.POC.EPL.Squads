import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";

export function Home() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        height="100%"
      >
        <Box
          mb={2}
          style={{
            minHeight: "90px",
            maxHeight: "200px",
            height: "calc(100% - 560px)",
          }}
        >
          <img
            src="./epl-logo.png"
            alt="Premier League Logo"
            style={{ height: "100%" }}
          />
        </Box>

        <Box>
          <Typography variant="h4" align="center">
            Premier League Team Squads
          </Typography>
          <Typography variant="subtitle1" align="center">
            Season 2024/25
          </Typography>
        </Box>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({
              pathname: "/teams",
              search: createSearchParams({ search: searchText }).toString(),
            });
          }}
          style={{ width: "100%" }}
        >
          <Stack spacing={2}>
            <TextField
              label="Search for a team"
              fullWidth
              autoFocus
              autoComplete="off"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              helperText="Search by team name or nickname: Arsenal, The Gunners..."
              type="search"
            />

            <Stack spacing={2} direction="row" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Search
              </Button>
              <Button variant="outlined" onClick={() => navigate("/teams")}>
                See All Teams
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
