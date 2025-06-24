import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") ?? undefined
  );

  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        position: "sticky",
        top: 0,
        p: 1,
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        boxShadow: "0 -1px 5px 1px #929292",
      }}
    >
      <Link to="/">
        <img
          src="./epl-logo.png"
          alt="Premier League Logo"
          style={{ height: "40px" }}
        />
      </Link>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams(
            searchText && createSearchParams({ search: searchText })
          );
        }}
        style={{ flex: 1, maxWidth: "900px" }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <TextField
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by team name or nickname: Arsenal, The Gunners..."
            variant="outlined"
            size="small"
            type="search"
            autoComplete="off"
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          <Button
            variant="outlined"
            sx={{ whiteSpace: "nowrap", minWidth: "fit-content  " }}
            onClick={() => setSearchParams(undefined)}
          >
            Show all
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
