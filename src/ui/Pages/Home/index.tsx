import React from "react";

// Components

import { useHome } from "./useHome";
import { Box } from "@mui/material";
import { Header } from "../../Components/Header";

//

import { TrendingAnimes } from "./TrendingAnimes";
import { AllAnimes } from "./AllAnimes";

export function Home() {
  const hook = useHome();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Header
        animeQueryValue={hook.animeQuery}
        setSearchBarAnimeQueryValue={(e) => {
          hook.setAnimeQuery(e);
        }}
        handleSubmit={() => {
          hook.searchAnime();
        }}
        scrollTo="#animes"
      />
      {/* Trending animes section */}

      <TrendingAnimes />

      {/* Trending animes section */}

      {/* All animes section */}

      <AllAnimes />

      {/* All animes section */}
    </Box>
  );
}
