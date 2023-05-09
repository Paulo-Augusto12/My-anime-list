import React from "react";

// Icons

import { MagnifyingGlass } from "@phosphor-icons/react";

//

// Material Ui

import { Box, Typography } from "@mui/material";

//

interface ICardProps {
  Name: string;
  Photo: string;
  EpisodesQtde: number;
}

export function Card({ Name, EpisodesQtde, Photo }: ICardProps) {
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
            src={Photo}
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
        {Name}
      </Typography>
      <Typography sx={{ marginTop: "-.75rem" }}>
        {EpisodesQtde} Episodes
      </Typography>
    </Box>
  );
}
