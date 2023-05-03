import React, { useEffect, useState } from "react";
import { GetAllAnimeUseCase } from "../../../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { AnimesRepository } from "../../../data/AnimesRepository";
import { RequestService } from "../../../domain/services/requestService";
import { AnimeModel } from "../../../domain/useCases/AnimeUseCases/Models/AnimeModels";

const httpService = new RequestService();
const animeRepository = new AnimesRepository(httpService);
const getAnimeUseCase = new GetAllAnimeUseCase(animeRepository);

export function useHome() {
  const [animes, setAnimes] = useState<AnimeModel[]>([]);

  async function getAnimes() {
    const params = {
      page: 1,
      limit: 10,
    };
    try {
      const data = await getAnimeUseCase.execute(params);
      setAnimes(data);
    } catch (err) {
      console.log(
        "[ ERROR DURING USE CASE CALL ]",
        JSON.stringify(err)
      );
    }
  }

  useEffect(() => {
    getAnimes();
  }, []);
  return {
    animes,
  };
}
