import React, { useEffect, useState } from "react";

// service

import { RequestService } from "../../../../domain/services/requestService";

//

// repositories

import { AnimesRepository } from "../../../../data/AnimesRepository";
import { CharactersRepository } from "../../../../data/CharactersRepository";

//

// use cases

import { GetARandomCharacterUseCase } from "../../../../domain/useCases/CharacterUseCase/GetARandomCharacterUseCase";
import { GetTrendingAnimesUseCase } from "../../../../domain/useCases/AnimeUseCases/GetTrendingAnimesUseCase";

//

// Request params

import { IGetTrendingAnimeRequestParams } from "../../../../domain/useCases/AnimeUseCases/abstractions/IGetTrendingAnimesUseCase";
import { AnimeModel } from "../../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

//

export function useTrendingAnimes() {
  // ------------------------ Depencency injection ------------------------ //

  // Http service

  const httpService = new RequestService();

  //

  // Repositories

  const charactersRepository = new CharactersRepository(httpService);
  const animesRepository = new AnimesRepository(httpService);

  //

  // Use Cases

  const getARandomCharacterUseCase = new GetARandomCharacterUseCase(
    charactersRepository
  );
  const getTrendingAnimesUseCase = new GetTrendingAnimesUseCase(
    animesRepository
  );

  //

  // ------------------------ Depencency injection ------------------------ //

  const [characterPhoto, setCharacterPhoto] = useState("");
  const [trendingAnimes, setTrendingAnimes] = useState<AnimeModel[]>([]);

  async function randomCharacterPhoto() {
    const data = await getARandomCharacterUseCase.execute();

    setCharacterPhoto(data.photo);
  }

  async function getTrendingAnimes() {
    const params: IGetTrendingAnimeRequestParams = {
      page: 1,
      limit: 5,
      type: "tv",
      filterBy: "bypopularity",
    };
    const data = await getTrendingAnimesUseCase.execute(params);

    setTrendingAnimes(data);
  }

  useEffect(() => {
    if (!characterPhoto.trim()) {
      randomCharacterPhoto();
    }
  }, []);

  useEffect(() => {
    if (!trendingAnimes.length || trendingAnimes === undefined) {
      getTrendingAnimes();
    }
  }, []);

  return {
    states: {},
    actions: {},
    visualElements: {
      characterPhoto,
      trendingAnimes
    },
  };
}
