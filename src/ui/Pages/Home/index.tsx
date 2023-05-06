import React from "react";
import { useHome } from "./useHome";
import {
  Box,
  Button,
  Grid,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import { Header } from "../../Components/Header";
import { Card } from "../../Components/Card";
import { ArrowRight } from "@phosphor-icons/react";
import { Link, Navigate } from "react-router-dom";

export function Home() {
  const hook = useHome();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
            borderRadius: "55px",
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
                borderRadius: "55px",
              }}
            />
          )}
        </Box>
      </Box>
      {hook.loadingTrendingAnimes ? (
        <Skeleton sx={{ height: "404px", borderRadius: "16px" }} />
      ) : (
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography color="black" fontWeight={700}>
            Trending
          </Typography>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
            }}
            id="top"
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
      )}

      {hook.loadingAnimes ? (
        <Skeleton
          height={"1607px"}
          variant="rectangular"
          sx={{ borderRadius: "18px" }}
        />
      ) : (
        <Grid
          container
          spacing={4}
          rowSpacing={8}
          columnSpacing={20}
          columns={32}
          id="animes"
          sx={{ scrollBehavior: "smooth", marginTop: "18px" }}
        >
          {hook.animes.map(({ name, episodes, photo, descrition }, index) => (
            <Grid item key={index} xs={8} sx={{ maxWidth: "255px" }}>
              <Card
                animeName={name}
                animeEpisodesQtde={episodes}
                animePhoto={photo}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <a href="#top" style={{ textDecoration: "none" }}>
          <Pagination
            count={hook.totalOfPages}
            page={hook.page}
            onChange={(e, page) => {
              hook.setPage(page);
            }}
            color="primary"
          />
        </a>
      </Box>
    </Box>
  );
}
