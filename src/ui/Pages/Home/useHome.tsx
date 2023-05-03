import React, { useEffect, useState } from "react";
import { GetAllAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { AnimesRepository } from "../../../data/AnimesRepository";
import { RequestService } from "../../../domain/services/requestService";
import { AnimeModel } from "../../../domain/useCases/AnimeUseCases/Models/AnimeModels";
import { SearchForAnAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/SearchForAnAnimeUseCase";
import { GetTrendingAnimesUseCase } from "../../../domain/useCases/AnimeUseCases/GetTrendingAnimesUseCase";

// Params

import { IGetTrendingAnimeRequestParams } from "../../../domain/useCases/AnimeUseCases/abstractions/IGetTrendingAnimesUseCase";

//

//  Http service

const httpService = new RequestService();

//

//  Anime Repository

const animeRepository = new AnimesRepository(httpService);

//

//  getAllAnimesUseCase

const getAnimeUseCase = new GetAllAnimeUseCase(animeRepository);

//

// searchForAnAnimeUseCase

const searchForAnAnimeUseCase = new SearchForAnAnimeUseCase(animeRepository);

//

// getTrendingAnimesUseCase

const getTrendingAnimesUseCase = new GetTrendingAnimesUseCase(animeRepository);

//

export function useHome() {
  const [animes, setAnimes] = useState<AnimeModel[]>([]);
  const [trendingAnimes, setTrendingAnimes] = useState<AnimeModel[]>([]);
  const [animeQuery, setAnimeQuery] = useState("");

  async function getAnimes() {
    const params = {
      page: 1,
      limit: 10,
    };
    try {
      const data = await getAnimeUseCase.execute(params);
      setAnimes(data);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  }

  async function searchAnime() {
    try {
      const data = await searchForAnAnimeUseCase.execute(animeQuery);

      setAnimes(data);
      setAnimeQuery("");
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  }

  async function getTrendingAnimes() {
    try {
      const params: IGetTrendingAnimeRequestParams = {
        page: 1,
        limit: 5,
        type: "tv",
        filterBy: "bypopularity",
      };

      const data = await getTrendingAnimesUseCase.execute(params);

      setTrendingAnimes(data)
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  }

  useEffect(() => {
    if (!animes.length) {
      getAnimes();
    }
  }, [animes]);

  useEffect(() => {
    if (!trendingAnimes.length) {
        getTrendingAnimes();
      }
  },[trendingAnimes])

  return {
    animes,
    animeQuery,
    setAnimeQuery,
    searchAnime,
  };
}
