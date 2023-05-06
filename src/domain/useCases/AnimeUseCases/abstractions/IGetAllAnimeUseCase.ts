import { AnimeModel } from "../Models/AnimeModels";

export interface IGetAllAnimeRequestParams {
  page: number;
  limit: number;
}

export interface IGetAllAnimeResponse {
  animes: AnimeModel[];
  paginationInfo: {
    lastPage: number;
    hasNextPage: boolean;
    currentPage: number;
    items: {
      count: number;
      total: number;
      perPage: number;
    };
  };
}
export interface IGetAllAnimeUseCase {
  execute(params: IGetAllAnimeRequestParams): Promise<IGetAllAnimeResponse>;
}
