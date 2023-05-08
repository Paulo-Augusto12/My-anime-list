import React, { useEffect, useState } from "react";

// service

import { RequestService } from "../../../../domain/services/requestService";

//

// repositories

import { AnimesRepository } from "../../../../data/AnimesRepository";

//

// use cases

import { GetAllAnimeUseCase } from "../../../../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";

//

// Request params

import { IGetAllAnimeRequestParams } from "../../../../domain/useCases/AnimeUseCases/abstractions/IGetAllAnimeUseCase";
import { AnimeModel } from "../../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

//

// ------------------------ Depencency injection ------------------------ //

// Http service

const httpService = new RequestService();

//

// Repositories

const animesRepository = new AnimesRepository(httpService);

//

// Use Cases

const getAllAnimesUseCase = new GetAllAnimeUseCase(animesRepository);

//

// ------------------------ Depencency injection ------------------------ //

export function useAllAnimes() {
  const [animes, setAnimes] = useState<AnimeModel[]>([]);
  const [paginationInfo, setPaginationInfo] = useState({
    lastPage: 0,
    hasNextPage: false,
    currentPage: 0,
    items: {
      count: 0,
      total: 0,
      perPage: 0,
    },
  });

  async function getAllAnimes() {
    const params: IGetAllAnimeRequestParams = {
      page: 1,
      limit: 24,
    };
    const data = await getAllAnimesUseCase.execute(params);

    setAnimes(data.animes);
    setPaginationInfo(data.paginationInfo);
  }

  useEffect(() => {
    if (!animes.length || animes === undefined) {
      getAllAnimes();
    }
  }, []);

  return {
    states: {
      animes,
      paginationInfo,
    },
    actions: {},
  };
}
