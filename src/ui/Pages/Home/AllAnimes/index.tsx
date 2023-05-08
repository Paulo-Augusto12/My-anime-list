import React from "react";

import { useAllAnimes } from "./useAllAnimes";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { Card } from "../../../Components/Card";
export function AllAnimes() {
  const { actions, states } = useAllAnimes();
  return (
    <Box>
      {!states.animes.length ? (
        <Skeleton
          height={"1607px"}
          variant="rectangular"
          sx={{ borderRadius: "18px" }}
          id="animes"
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "18px",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Animes
          </Typography>
          <Grid
            container
            spacing={4}
            rowSpacing={8}
            columnSpacing={20}
            columns={32}
            id="animes"
            sx={{ scrollBehavior: "smooth", marginTop: "18px" }}
          >
            {states.animes.map(
              ({ name, episodes, photo, descrition }, index) => (
                <Grid item key={index} xs={8} sx={{ maxWidth: "255px" }}>
                  <Card
                    animeName={name}
                    animeEpisodesQtde={episodes}
                    animePhoto={photo}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
