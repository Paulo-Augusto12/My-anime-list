import { AnimeModel } from "../Models/AnimeModels";

export interface ISearchForAnAnimeRequestParams {
  page: number;
  limit: number;
  query: string
}
export interface ISearchForAnAnimeResponse {
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
  }
}
export interface ISearchForAnAnimeUseCase {
  execute(params: ISearchForAnAnimeRequestParams): Promise<ISearchForAnAnimeResponse>;
}
