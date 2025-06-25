import { Alert, Box } from "@mui/material";

export function ErrorBox({ error }: { error: string }) {
  return (
    <Box width={"100%"}>
      <Alert severity="error">{error}</Alert>
    </Box>
  );
}
