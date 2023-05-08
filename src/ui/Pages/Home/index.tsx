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
import { TrendingAnimes } from "./TrendingAnimes";

export function Home() {
  const hook = useHome();
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "1.5rem",
    //   }}
    // >
    //   {hook.loadingAnimes ? (
    //     <Skeleton
    //       height={"1607px"}
    //       variant="rectangular"
    //       sx={{ borderRadius: "18px" }}
    //       id="animes"
    //     />
    //   ) : (
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "1rem",
    //         marginTop: "18px",
    //       }}
    //     >
    //       <Typography variant="h5" fontWeight={700}>
    //         Animes
    //       </Typography>
    //       <Grid
    //         container
    //         spacing={4}
    //         rowSpacing={8}
    //         columnSpacing={20}
    //         columns={32}
    //         id="animes"
    //         sx={{ scrollBehavior: "smooth", marginTop: "18px" }}
    //       >
    //         {hook.animes.map(({ name, episodes, photo, descrition }, index) => (
    //           <Grid item key={index} xs={8} sx={{ maxWidth: "255px" }}>
    //             <Card
    //               animeName={name}
    //               animeEpisodesQtde={episodes}
    //               animePhoto={photo}
    //             />
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Box>
    //   )}
    //   <Box
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginTop: "2rem",
    //     }}
    //   >
    //     <a href="#top" style={{ textDecoration: "none" }}>
    //       <Pagination
    //         count={hook.paginationData.totalOfPages}
    //         page={hook.page}
    //         onChange={(e, page) => {
    //           hook.setPage(page);
    //         }}
    //         color="primary"
    //       />
    //     </a>
    //   </Box>
    // </Box>
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
      <TrendingAnimes />
    </Box>
  );
}
