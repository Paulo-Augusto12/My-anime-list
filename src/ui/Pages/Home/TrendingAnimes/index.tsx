import React from "react";

// Components

import { Box, Button, Skeleton, Typography } from "@mui/material";
import { Card } from "../../../Components/Card";

//

// icons

import { ArrowRight } from "@phosphor-icons/react";

//

// Hook

import { useTrendingAnimes } from "./useTrendingAnimes";

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <a href="#animes" style={{ textDecoration: "none", width: "15%" }}>
          <Button
            sx={{
              height: "25px",
              backgroundColor: "#d7d7d7",
              padding: "1.8rem",
              color: "black",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "55px",
              textTransform: "none",
              fontWeight: "700",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#4361ee",
                color: "#ffff",
              },
            }}
          >
            View All Anime
            <ArrowRight size={"16px"} />
          </Button>
        </a>
      </Box>
    </Box>
  );
}
