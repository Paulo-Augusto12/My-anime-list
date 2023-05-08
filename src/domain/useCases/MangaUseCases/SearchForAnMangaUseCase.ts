// use case interfaces

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
    const response = await this.repository.searchForAnAnime(params);

    return {
      mangas: Manga,
      pagination: Pagination,
    };
  }
}
