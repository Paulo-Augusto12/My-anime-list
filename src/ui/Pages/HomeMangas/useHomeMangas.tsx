import React, { useState } from "react";
import { Manga } from "../../../domain/useCases/MangaUseCases/models/Manga";
import { PaginationModel } from "../../../domain/useCases/MangaUseCases/models/Pagination";

export function useHomeMangas() {
  const [selectedMangas, setSelectMangas] = useState<Manga[]>([]);
  const [mangaQuery, setMangaQuery] = useState("");
  const [loadingMangas, setLoadingMangas] = useState(false);
  const [pageManga, setPageManga] = useState(0);
  const [paginationData, setPaginationData] = useState<PaginationModel>({
    page: 0,
    pageSize: 0,
    totalOfPages: 0,
  });
  return {
    states: {
      selectedMangas,
      setSelectMangas,
      loadingMangas,
      setLoadingMangas,
      pageManga,
      setPageManga,
      paginationData,
      setPaginationData,
      mangaQuery,
      setMangaQuery,
    },
  };
}
