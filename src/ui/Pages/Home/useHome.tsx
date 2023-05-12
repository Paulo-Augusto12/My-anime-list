import React, { useEffect, useState } from "react";
import { AnimeModel } from "../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

// Dependencies

import { useCases } from "../../../di";

//

export function useHome() {
  const [animes, setAnimes] = useState<AnimeModel[]>([]);
  const [animeQuery, setAnimeQuery] = useState("");
  const [loadingAnimes, setLoadingAnimes] = useState(false);
  const [page, setPage] = useState(1);
  const [paginationData, setpaginationData] = useState({
    page: 0,
    totalOfPages: 0,
  });

  async function getAnimes() {
    setLoadingAnimes(true);
    const params = {
      page: page,
      limit: 24,
    };
    try {
      const data = await useCases.animes.getAllAnimesUseCase.execute(params);
      setAnimes(data.animes);
      setpaginationData({
        page: page,
        totalOfPages: data.paginationInfo.lastPage,
      });
      setLoadingAnimes(false);
    } catch (err) {
      setLoadingAnimes(false);
      console.log(JSON.stringify(err));
    }
  }

  async function searchAnime() {
    setLoadingAnimes(true);
    try {
      const params = {
        page,
        limit: 24,
        query: animeQuery,
      };
      const data = await useCases.animes.searchForAnimesUseCase.execute(params);

      setAnimes(data.animes);
      setAnimeQuery("");
      setLoadingAnimes(false);
    } catch (err) {
      setLoadingAnimes(false);
      console.log(JSON.stringify(err));
    }
  }

  async function handlePageNavigation(navigateToPage: number) {
    setLoadingAnimes(true);
    const params = {
      page: navigateToPage,
      limit: 24,
    };

    try {
      const data = await useCases.animes.getAllAnimesUseCase.execute(params);

      setAnimes(data.animes);
      setpaginationData({
        page: navigateToPage,
        totalOfPages: paginationData.totalOfPages,
      });
      setLoadingAnimes(false);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return {
    animes,
    animeQuery,
    setAnimeQuery,
    searchAnime,
    page,
    setPage,
    paginationData,
    loadingAnimes,
    handlePageNavigation,
    getAnimes,
  };
}
