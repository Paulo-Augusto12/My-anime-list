// use case interfaces

import { ISearchForAnMangaRepository } from "../../interfaces/MangaRepository/ISearchForAnMangaRepository";
import {
  ISearchForAnMangaRequestParams,
  ISearchForAnMangaResponse,
  ISearchForAnMangaUseCase,
} from "./abstractions/ISearchForAnMangaUseCase";

//

// Models

import { Manga } from "./models/Manga";
import { Pagination } from "./models/Pagination";

//

export class SearchForAnMangaUseCase implements ISearchForAnMangaUseCase {
  constructor(private repository: ISearchForAnMangaRepository) {}

  async execute(
    params: ISearchForAnMangaRequestParams
  ): Promise<ISearchForAnMangaResponse> {
    const response = await this.repository.searchForAnManga(params);

    const mangas = response.data.data.map(
      ({ title, images, chapters }) =>
        new Manga(title, images.webp.image_url, chapters)
    );

    const pagination_data = response.data.pagination;

    const pagination = new Pagination(
      params.page,
      pagination_data.last_visible_page,
      pagination_data.items.per_page
    );
    return {
      mangas,
      pagination,
    };
  }
}
