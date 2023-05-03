import { IGetTrendingAnimesRepository } from "../../interfaces/AnimeRepository/IGetTrendingAnimesRepository";
import { AnimeModel } from "./Models/AnimeModels";

// Interface do caso de uso

import {
  IGetTrendingAnimeRequestParams,
  IGetTrendingAnimesUseCase,
} from "./abstractions/IGetTrendingAnimesUseCase";

//

export class GetTrendingAnimesUseCase implements IGetTrendingAnimesUseCase {
  constructor(private repository: IGetTrendingAnimesRepository) {}

  async execute(params: IGetTrendingAnimeRequestParams): Promise<AnimeModel[]> {
    const response = await this.repository.getTrendingAnimes(params);

    return response.data.data.map(
      ({ title_english, images, episodes }) =>
        new AnimeModel(title_english, images.jpg.image_url, episodes)
    );
  } 
}
