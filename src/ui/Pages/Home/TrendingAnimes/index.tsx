import React from "react";

// Material ui components

import { Box, Skeleton, Typography } from "@mui/material";

//

// Hook

import { useTrendingAnimes } from "./useTrendingAnimes";

//

export function TrendingAnimes() {
  const { actions, states, visualElements } = useTrendingAnimes();

  return (
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
  );
}
