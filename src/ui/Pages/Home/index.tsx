import React from "react";
import { useHome } from "./useHome";
import { Box, Skeleton, Typography } from "@mui/material";
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
            height: "100px",
            borderRadius: "33px",
          }}
        >
          {!hook.randomCharacterPhoto.trim() ? (
            <Skeleton
              sx={{ borderRadius: "33px", width: "156px", height: "100px" }}
            />
          ) : (
            <img
              src={hook.randomCharacterPhoto}
              style={{
                objectFit: "fill",
                width: "156px",
                height: "100px",
                borderRadius: "33px",
              }}
            />
          )}
        </Box>
      </Box>
      {hook.loadingTrendingAnimes ? (
        <Skeleton sx={{height: '404px', borderRadius: '16px'}}/>
      ): (

      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography color="black">Trending</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {hook.trendingAnimes.map(({ episodes, name, photo }) => (
            <Box maxWidth={"245px"}>
              {!photo.trim() ? (
                <Skeleton />
              ) : (
                <Card
                  animeName={name}
                  animeEpisodesQtde={episodes}
                  animePhoto={photo}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      )}
    </Box>
  );
}
