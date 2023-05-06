import React, { useEffect, useState } from "react";
import { AnimeModel } from "../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

// Services

import { RequestService } from "../../../domain/services/requestService";

//

// Repositories

import { AnimesRepository } from "../../../data/AnimesRepository";
import { CharactersRepository } from "../../../data/CharactersRepository";

//

// Use cases

import { SearchForAnAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/SearchForAnAnimeUseCase";
import { GetTrendingAnimesUseCase } from "../../../domain/useCases/AnimeUseCases/GetTrendingAnimesUseCase";
import { GetAllAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { GetARandomCharacterUseCase } from "../../../domain/useCases/CharacterUseCase/GetARandomCharacterUseCase";

//

// Params

import { IGetTrendingAnimeRequestParams } from "../../../domain/useCases/AnimeUseCases/abstractions/IGetTrendingAnimesUseCase";

//

//  Http service

const httpService = new RequestService();

//

//  Anime Repository

const animeRepository = new AnimesRepository(httpService);

//

// Characters Repository

const charactersRepository = new CharactersRepository(httpService);

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

// getARandomCharacterUseCase

const getARandomCharacterUseCase = new GetARandomCharacterUseCase(
  charactersRepository
);

//

export function useHome() {
  const [animes, setAnimes] = useState<AnimeModel[]>([]);
  const [trendingAnimes, setTrendingAnimes] = useState<AnimeModel[]>([]);
  const [animeQuery, setAnimeQuery] = useState("");
  const [randomCharacterPhoto, setRandomCharacterPhoto] = useState("");
  const [loadingTrendingAnimes, setLoadingTrendingAnimes] = useState(false);

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
    setLoadingTrendingAnimes(true);
    try {
      const params: IGetTrendingAnimeRequestParams = {
        page: 1,
        limit: 5,
        type: "tv",
        filterBy: "bypopularity",
      };

      const data = await getTrendingAnimesUseCase.execute(params);

      setTrendingAnimes(data);
      setLoadingTrendingAnimes(false);
    } catch (err) {
      setLoadingTrendingAnimes(false);
      console.log(JSON.stringify(err));
    }
  }

  async function getARandomCharacterPhoto() {
    const data = await getARandomCharacterUseCase.execute();

    setRandomCharacterPhoto(data.photo);
  }

  useEffect(() => {
    if (!animes.length) {
      getAnimes();
    }
  }, []);

  useEffect(() => {
    if (!trendingAnimes.length) {
      getTrendingAnimes();
    }
  }, []);

  useEffect(() => {
    if (!randomCharacterPhoto.trim()) {
      getARandomCharacterPhoto();
    }
  }, []);

  return {
    animes,
    animeQuery,
    setAnimeQuery,
    searchAnime,
    randomCharacterPhoto,
    trendingAnimes,
    loadingTrendingAnimes,
  };
}
