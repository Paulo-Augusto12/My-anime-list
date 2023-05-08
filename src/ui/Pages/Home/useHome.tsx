import React, { useState } from "react";

// Services

import { RequestService } from "../../../domain/services/requestService";

//

// Repositories

import { AnimesRepository } from "../../../data/AnimesRepository";

//

// Use cases

import { SearchForAnAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/SearchForAnAnimeUseCase";

//

//  Http service

const httpService = new RequestService();

//

//  Anime Repository

const animeRepository = new AnimesRepository(httpService);

//

// searchForAnAnimeUseCase

const searchForAnAnimeUseCase = new SearchForAnAnimeUseCase(animeRepository);

//

export function useHome() {
  const [animeQuery, setAnimeQuery] = useState("");
  const [loadingAnimes, setLoadingAnimes] = useState(false);


  async function searchAnime() {
    setLoadingAnimes(true);
    try {
      const data = await searchForAnAnimeUseCase.execute(animeQuery);

      // setAnimes(data);
      setAnimeQuery("");
      setLoadingAnimes(false);
    } catch (err) {
      setLoadingAnimes(false);
      console.log(JSON.stringify(err));
    }
  }



  return {
    animeQuery,
    setAnimeQuery,
    searchAnime,
    loadingAnimes,
  };
}
