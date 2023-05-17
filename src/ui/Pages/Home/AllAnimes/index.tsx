import React from "react";

import { Box, Grid, Pagination, Skeleton, Typography } from "@mui/material";
import { Card } from "../../../Components/Card";
import { AnimeModel } from "../../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

interface IAllAnimesProps {
  animes: AnimeModel[];
  paginationData: {
    page: number;
    totalOfPages: number;
  };
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  loading: boolean;
}
export function AllAnimes({
  animes,
  paginationData,
  onPageChange,
  loading,
}: IAllAnimesProps) {
  return (
    <Box>
      {loading ? (
        <Skeleton
          height={"1607px"}
          variant="rectangular"
          sx={{ borderRadius: "18px" }}
          id="animes"
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "18px",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Animes
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: 'repeat(5, 2fr)', gap: '1rem' }}>
            {animes.map(({ name, episodes, photo, descrition }, index) => (
              <Box>
                <Card
                  animeName={name}
                  animeEpisodesQtde={episodes}
                  animePhoto={photo}
                />
                </Box>
            ))}
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <a href="#animes" style={{ textDecoration: "none" }}>
          <Pagination
            page={paginationData.page}
            count={paginationData.totalOfPages}
            color="primary"
            onChange={(e, page) => onPageChange(e, page)}
          />
        </a>
      </Box>
    </Box>
  );
}
