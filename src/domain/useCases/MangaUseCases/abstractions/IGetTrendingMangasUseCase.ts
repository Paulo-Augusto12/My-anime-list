// Models

import { Manga } from "../models/Manga";
import { Pagination } from "../models/Pagination";

//

enum mangaQueryType {
  manga = "manga",
  novel = "novel",
  lightnovel = "lightnovel",
  oneshot = "oneshot",
  doujin = "doujin",
  manhwa = "manhwa",
  manhua = "manhua",
}

enum mangaFilterType {
  publishing = "publishing",
  upcoming = "upcoming",
  bypopularity = "bypopularity",
  favorite = "favorite",
}

export interface IGetTrendingMangasRequestParams {
  type: mangaQueryType;
  filter: mangaFilterType;
  page: number;
  limit: number;
}

export interface IGetTrendingMangasResponse {
  mangas: Manga[];
  pagination: Pagination;
}
export interface IGetTrendingMangasUseCase {
  execute(
    params: IGetTrendingMangasRequestParams
  ): Promise<IGetTrendingMangasResponse>;
}
