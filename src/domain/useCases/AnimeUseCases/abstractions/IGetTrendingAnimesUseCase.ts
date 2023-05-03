import { AnimeModel } from "../Models/AnimeModels";

export interface IGetTrendingAnimeRequestParams {}

export interface IGetTrendingAnimesUseCase {
  execute(params: IGetTrendingAnimeRequestParams): Promise<AnimeModel[]>;
}
