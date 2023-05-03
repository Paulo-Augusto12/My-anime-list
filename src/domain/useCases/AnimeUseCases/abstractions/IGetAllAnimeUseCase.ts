import { AnimeModel } from "../Models/AnimeModels";

export interface IGetAllAnimeRequestParams {
  page: number;
  limit: number;
}
export interface IGetAllAnimeUseCase {
  execute(params: IGetAllAnimeRequestParams): Promise<AnimeModel[]>;
}
