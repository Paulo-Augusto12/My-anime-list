import React from "react";
import { useHome } from "./useHome";
import { Box, Typography } from "@mui/material";
import { Header } from "../../Components/Header";
import { Card } from "../../Components/Card";

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
          <img
            src={hook.randomCharacterPhoto}
            style={{
              objectFit: "fill",
              width: "256px",
              height: "100px",
              borderRadius: "33px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography color="black">Trending</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
          
        {hook.trendingAnimes.map(({episodes, name, photo}) => (
          <Card animeName={name} animeEpisodesQtde={episodes} animePhoto={photo}/>
        ))}
          </Box>
      </Box>
    </Box>
  );
}
