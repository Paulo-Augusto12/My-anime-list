import React from "react";
import { Manga } from "../../../../domain/useCases/MangaUseCases/models/Manga";
import { Box, Grid, Pagination, Skeleton, Typography } from "@mui/material";
import { Card } from "../../../Components/Card";

interface IAllMangasProps {
  mangas: Manga[];
  PaginationData: {
    page: number;
    TotalOfPages: number;
  };

  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  loading: boolean;
}

export function AllMangas({
  mangas,
  PaginationData,
  onPageChange,
  loading,
}: IAllMangasProps) {
  return (
    <Box>
      {loading ? (
        <Skeleton
          height={"1607px"}
          variant="rectangular"
          sx={{ borderRadius: "18px" }}
          id="mangas"
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
            Mangas
          </Typography>
          <Grid
            container
            spacing={4}
            rowSpacing={8}
            columnSpacing={20}
            columns={32}
            id="mangas"
            sx={{ scrollBehavior: "smooth", marginTop: "18px" }}
          >
            {mangas.map(({ name, photo, chapters }, index) => (
              <Grid item key={index} xs={8} sx={{ maxWidth: "255px" }}>
                <Card Name={name} Photo={photo} EpisodesQtde={chapters} />
              </Grid>
            ))}
          </Grid>
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
        <a href="#top" style={{ textDecoration: "none" }}>
          <Pagination
            page={PaginationData.page}
            count={PaginationData.TotalOfPages}
            color="primary"
            onChange={(e, page) => onPageChange(e, page)}
          />
        </a>
      </Box>
    </Box>
  );
}
