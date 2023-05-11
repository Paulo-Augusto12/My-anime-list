import { AnimesRepository } from "../data/AnimesRepository";
import { RequestService } from "../domain/services/requestService";
import { GetAllAnimeUseCase } from "../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { SearchForAnAnimeUseCase } from "../domain/useCases/AnimeUseCases/SearchForAnAnimeUseCase";

// http

const httpService = new RequestService();

//

// Repositories

const animeRepository = new AnimesRepository(httpService);

//

// use cases

const getAllAnimesUseCase = new GetAllAnimeUseCase(animeRepository);
const searchForAnimesUseCase = new SearchForAnAnimeUseCase(animeRepository);

//

const useCases = {
  animes: {
    getAllAnimesUseCase,
    searchForAnimesUseCase,
  },
};

export { useCases };
