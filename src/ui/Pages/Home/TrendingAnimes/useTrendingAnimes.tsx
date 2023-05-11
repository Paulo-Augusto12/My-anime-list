import React, { useEffect, useState } from "react";

// Dependency injection

import { useCases } from "../../../../di";

//

// Request params

import { IGetTrendingAnimeRequestParams } from "../../../../domain/useCases/AnimeUseCases/abstractions/IGetTrendingAnimesUseCase";

//

// Models

import { AnimeModel } from "../../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

//

export function useTrendingAnimes() {
  const [characterPhoto, setCharacterPhoto] = useState("");
  const [trendingAnimes, setTrendingAnimes] = useState<AnimeModel[]>([]);

  async function randomCharacterPhoto() {
    const data = await useCases.characters.getARandomCharacter.execute();

    setCharacterPhoto(data.photo);
  }

  async function getTrendingAnimes() {
    const params: IGetTrendingAnimeRequestParams = {
      page: 1,
      limit: 5,
      type: "tv",
      filterBy: "bypopularity",
    };
    const data = await useCases.animes.getTrendingAnimesUseCase.execute(params);

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
      trendingAnimes,
    },
  };
}
