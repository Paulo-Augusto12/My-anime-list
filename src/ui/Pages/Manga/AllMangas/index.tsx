import React from "react";
import { Manga } from "../../../../domain/useCases/MangaUseCases/models/Manga";
import { Box, Grid, Skeleton, Typography, debounce } from "@mui/material";

interface IAllMangasProps {
  mangas: Manga[];
  Pagination: {
    page: number;
    TotalOfPages: number;
  };

  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  loading: boolean;
}

export function AllMangas({
  mangas,
  Pagination,
  onPageChange,
  loading,
}: IAllMangasProps) {
    return(
        <Box>
            {loading ? (
                <Skeleton
                height={"1607px"}
                variant="rectangular"
                sx={{borderRadius: "18px"}}
                id="mangas" 
                />
            ):(
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "18px"
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
                    sx={{scrollBehavior: "smooth", marginTop: "18px" }}
                    >

                    </Grid>

                </Box>
            )}
        </Box>
    )
}
