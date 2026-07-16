import { useEffect, useState } from "react";
import { getHello } from "./services/api";

import {
  Container,
  Paper,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHello().then((data) => {
      setMessage(data);
    });
  }, []);

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper
          elevation={5}
          sx={{
            p: 5,
            width: "100%",
            textAlign: "center",
            borderRadius: 3,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Spring Boot + React
          </Typography>

          {message ? (
            <Typography variant="h5" color="primary">
              {message}
            </Typography>
          ) : (
            <CircularProgress />
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
