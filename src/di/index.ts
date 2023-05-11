import { AnimesRepository } from "../data/AnimesRepository";
import { RequestService } from "../domain/services/requestService";
import { GetAllAnimeUseCase } from "../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";

// http

const httpService = new RequestService();

//

// Repositories

const animeRepository = new AnimesRepository(httpService);

//

// use cases

const getAllAnimesUseCase = new GetAllAnimeUseCase(animeRepository);

//

const useCases = {
  animes: {
    getAllAnimesUseCase,
  },
};

export { useCases };
