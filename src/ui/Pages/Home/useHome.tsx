import React, { useEffect, useState } from "react";
import { GetAllAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { AnimesRepository } from "../../../data/AnimesRepository";
import { RequestService } from "../../../domain/services/requestService";
import { AnimeModel } from "../../../domain/useCases/AnimeUseCases/Models/AnimeModels";
import { SearchForAnAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/SearchForAnAnimeUseCase";

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

export function useHome() {
  const [animes, setAnimes] = useState<AnimeModel[]>([]);
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

  useEffect(() => {
    if (!animes.length) {
      getAnimes();
    }
  }, []);

  return {
    animes,
    animeQuery,
    setAnimeQuery,
    searchAnime,
  };
}
