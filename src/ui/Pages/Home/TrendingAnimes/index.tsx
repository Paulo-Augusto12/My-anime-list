import React from "react";

// Material ui components

import { Box, Skeleton, Typography } from "@mui/material";

//

// Hook

import { useTrendingAnimes } from "./useTrendingAnimes";
import { Card } from "../../../Components/Card";

//

export function TrendingAnimes() {
  const { actions, states, visualElements } = useTrendingAnimes();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" color="#4361ee">
          My Anime List
        </Typography>
        <Box
          sx={{
            height: "100px",
            borderRadius: "55px",
          }}
        >
          {!visualElements.characterPhoto.trim() ? (
            <Skeleton
              sx={{ borderRadius: "33px", width: "156px", height: "100px" }}
            />
          ) : (
            <img
              src={visualElements.characterPhoto}
              style={{
                objectFit: "fill",
                width: "156px",
                height: "100px",
                borderRadius: "55px",
              }}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Trending
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {visualElements.trendingAnimes.map(
            ({ name, photo, episodes, descrition }, index) => (
              <Card
                animeName={name}
                animeEpisodesQtde={episodes}
                animePhoto={photo}
                key={index}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
