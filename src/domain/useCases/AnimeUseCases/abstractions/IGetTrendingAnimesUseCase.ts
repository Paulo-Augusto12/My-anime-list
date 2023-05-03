import { AnimeModel } from "../Models/AnimeModels";

export interface IGetTrendingAnimeRequestParams {
  page: number;
  limit: number;
  type: "tv" | "movie" | "ova" | "special" | "ona" | "music";
}

export interface IGetTrendingAnimesUseCase {
  execute(params: IGetTrendingAnimeRequestParams): Promise<AnimeModel[]>;
}
