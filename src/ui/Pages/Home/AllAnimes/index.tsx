import React from "react";

import { Box, Grid, Pagination, Skeleton, Typography } from "@mui/material";
import { Card } from "../../../Components/Card";
import { AnimeModel } from "../../../../domain/useCases/AnimeUseCases/Models/AnimeModels";
import { Select } from "../../../Components/Select";

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
          <Box sx={{ display: "flex", flexDirection: "row", gap: "1.5rem", alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={700}>
              Animes
            </Typography>
            <Box>
              <Select
                options={[
                  {
                    name: "test",
                    value: 1,
                  },
                  {
                    name: "test 2",
                    value: 2,
                  },
                  {
                    name: "test 3",
                    value: 3,
                  },
                ]}
                getOptionLabel={(option) => option.name}
                onSelectChange={(newValue) => {
                  console.log(newValue);
                }}
                selectLabel={Option.name}
              />
            </Box>
          </Box>
          <Grid
            container
            spacing={4}
            rowSpacing={8}
            columnSpacing={20}
            columns={32}
            id="animes"
            sx={{ scrollBehavior: "smooth", marginTop: "18px" }}
          >
            {animes.map(({ name, episodes, photo, descrition }, index) => (
              <Grid item key={index} xs={8} sx={{ maxWidth: "255px" }}>
                <Card
                  animeName={name}
                  animeEpisodesQtde={episodes}
                  animePhoto={photo}
                />
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
