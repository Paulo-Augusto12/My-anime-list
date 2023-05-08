
// Models

import { Manga } from "../models/Manga";
import { Pagination } from "../models/Pagination";

//

export interface IGetTrendingMangasRequestParams {}
export interface IGetTrendingMangasResponse {
  mangas: Manga[];
  pagination: Pagination;
}
export interface IGetTrendingMangasUseCase {
  execute(
    params: IGetTrendingMangasRequestParams
  ): Promise<IGetTrendingMangasResponse>;
}
