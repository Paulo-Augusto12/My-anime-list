import React from "react";
import { useHome } from "./useHome";
import { Box, Typography } from "@mui/material";
import { Header } from "../../Components/Header";

export function Home() {
  const hook = useHome();
  return (
    <Box>
      <Header
        animeQueryValue={hook.animeQuery}
        setSearchBarAnimeQueryValue={(e) => {
          hook.setAnimeQuery(e);
        }}
        handleSubmit={() => {
          hook.searchAnime();
        }}
      />
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
            width: "256px",
            height: "100px",
            borderRadius: "33px",
          }}
        >
          {/* <img
            src={hook.animePhoto}
            style={{
              objectFit: "cover",
              width: "256px",
              height: "100px",
              borderRadius: "33px",
            }}
          /> */}
        </Box>
      </Box>
    </Box>
  );
}
