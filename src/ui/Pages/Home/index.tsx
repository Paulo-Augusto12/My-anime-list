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

      <TrendingAnimes
        onResetAction={() => {
          hook.setPage(1);
          hook.getAnimes();
        }}
      />

      {/* Trending animes section */}

      {/* All animes section */}

      <AllAnimes
        animes={hook.animes}
        paginationData={hook.paginationData}
        onPageChange={(e, page) => {
          hook.setPage(page);
          hook.handlePageNavigation(page);
        }}
        loading={hook.loadingAnimes}
      />

      {/* All animes section */}
    </Box>
  );
}
