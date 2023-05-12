import { AnimesRepository } from "../data/AnimesRepository";
import { CharactersRepository } from "../data/CharactersRepository";
import { RequestService } from "../domain/services/requestService";
import { GetAllAnimeUseCase } from "../domain/useCases/AnimeUseCases/GetAllAnimesUseCase";
import { GetTrendingAnimesUseCase } from "../domain/useCases/AnimeUseCases/GetTrendingAnimesUseCase";
import { SearchForAnAnimeUseCase } from "../domain/useCases/AnimeUseCases/SearchForAnAnimeUseCase";
import { GetARandomCharacterUseCase } from "../domain/useCases/CharacterUseCase/GetARandomCharacterUseCase";

// http

const httpService = new RequestService();

//

// Repositories

const animeRepository = new AnimesRepository(httpService);
const charactersRepository = new CharactersRepository(httpService);

//

// Anime use cases

const getAllAnimesUseCase = new GetAllAnimeUseCase(animeRepository);
const searchForAnimesUseCase = new SearchForAnAnimeUseCase(animeRepository);
const getTrendingAnimesUseCase = new GetTrendingAnimesUseCase(animeRepository);

//

// Characters use cases

const getARandomCharacter = new GetARandomCharacterUseCase(
  charactersRepository
);

//

const useCases = {
  animes: {
    getAllAnimesUseCase,
    searchForAnimesUseCase,
    getTrendingAnimesUseCase,
  },
  characters: {
    getARandomCharacter,
  },
};

export { useCases };
