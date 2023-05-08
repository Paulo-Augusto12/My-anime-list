import { Pagination } from "../../../models/pagination";
import { AnimeModel } from "../Models/AnimeModels";

export interface ISearchForAnAnimeRequestParams {
  page: number;
  limit: number;
  query: string;
}
export interface ISearchForAnAnimeResponse {
  animes: AnimeModel[];
  paginationInfo: Pagination;
}
export interface ISearchForAnAnimeUseCase {
  execute(
    params: ISearchForAnAnimeRequestParams
  ): Promise<ISearchForAnAnimeResponse>;
}
