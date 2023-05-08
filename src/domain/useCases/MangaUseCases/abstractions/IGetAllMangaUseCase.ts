import { Manga } from "../models/Manga";
import { Pagination } from "../models/Pagination";

export interface IGetAllMangaResponse {
  mangas: Manga[];
  paginationData: Pagination;
}

export interface IGetAllMangaRequestParams {
  page: number;
  limit: number;
}

export interface IGetAllMangaUseCase {
  execute(params: IGetAllMangaRequestParams): Promise<IGetAllMangaResponse>;
}
