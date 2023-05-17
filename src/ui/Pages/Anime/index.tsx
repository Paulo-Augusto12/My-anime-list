import React from "react";

// Components

import { Header } from "../../Components/Header";

//

// hook

import { useAnime } from "./useAnime";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

//
export function Anime() {
  const hook = useAnime();
  const { state } = useLocation();
  const { anime } = state
  return (
    <Box>
      <Header
        animeQueryValue={hook.query}
        setSearchBarAnimeQueryValue={(e) => hook.setQuery(e)}
        handleSubmit={() => {}}
        scrollTo=""
      />
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
        <Box>
        <Typography variant='h3' textAlign={'center'} fontWeight={700}>
            {anime.name}
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2rem'}}>
        <Box
          sx={{
            height: "300px",
            width: "225px",
            borderRadius: "2rem",
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <img
            src={anime.photo as string}
            style={{
              objectFit: "cover",
              height: "300px",
              width: "225px",
              borderRadius: "2rem",
            }}
          />
        </Box>
        <Typography variant='h6'>
        {anime.descrition}
        </Typography>
        </Box>
        
        </Box>
    </Box>
  );
}
