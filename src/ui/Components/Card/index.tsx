import React from "react";

// Icons

import { MagnifyingGlass } from "@phosphor-icons/react";

//

// Material Ui

import { Box, Typography } from "@mui/material";

//

interface ICardProps {
  animeName: string;
  animePhoto: string;
  animeEpisodesQtde: number;
}

export function Card({ animeName, animeEpisodesQtde, animePhoto }: ICardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "255px",
      }}
    >
      <button
        style={{
          border: "none",
          outline: "none",
          cursor: "pointer",
          background: "none",
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: "225px",
            borderRadius: "2rem",
            "&:hover": {
              opacity: "75%",
            },
          }}
        >
          <img
            src={animePhoto}
            style={{
              objectFit: "cover",
              height: "300px",
              width: "225px",
              borderRadius: "2rem",
            }}
          />
        </Box>
      </button>
      <Typography
        color="black"
        sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
      >
        {animeName}
      </Typography>
      <Typography sx={{ marginTop: "-.75rem" }}>
        {animeEpisodesQtde} Episodes
      </Typography>
    </Box>
  );
}
