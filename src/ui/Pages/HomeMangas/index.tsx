import React from "react";
import { Box } from "@mui/material";
import { AllMangas } from "./AllMangas";
import { useHomeMangas } from "./useHomeMangas";
import { Header } from "../../Components/Header";

export function MangaHome() {

  
  const { states } = useHomeMangas()
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }}
    >
       {/* Starting here Header section */}
      <Header
      QueryValue={states.mangaQuery}
      setSearchBarQueryValue={(e)=> {
        states.setMangaQuery(e);
      }}
      handleSubmit={() => {}}
      scrollTo="#mangas" 
      />
      {/* Finish here Header section */}

      {/* Starting here AllMangas section */}
      <AllMangas 
      mangas={states.selectedMangas}
      paginationData={states.paginationData}
      onPageChange={(e, page)=> {
        states.setPageManga(page);
      }}
      loading={states.loadingMangas}
       />
    {/* Finish here AllMangas section */}
    </Box>
  );
}
