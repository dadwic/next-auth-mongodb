import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import AppWrapper from "@/components/AppWrapper";
import Grid from "@mui/material/Grid";
import Chart from "@/components/Chart";
import Deposits from "@/components/Deposits";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  return (
    <AppWrapper>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppWrapper>
  );
}
