// Repository interface

import { IGetAllMangaRepository } from "../../interfaces/MangaRepository/IGetAllMangaRepository";

//

// Use case interface

import {
  IGetAllMangaRequestParams,
  IGetAllMangaResponse,
  IGetAllMangaUseCase,
} from "./abstractions/IGetAllMangaUseCase";

//

// Models

import { Manga } from "./models/Manga";
import { Pagination } from "./models/Pagination";

//

export class GetAllMangaUseCase implements IGetAllMangaUseCase {
  constructor(private repository: IGetAllMangaRepository) {}

  async execute(
    params: IGetAllMangaRequestParams
  ): Promise<IGetAllMangaResponse> {
    const response = await this.repository.getAllManga(params);

    const mangas = response.data.data.map(
      ({ title, images, chapters }) =>
        new Manga(title, images.webp.image_url, chapters)
    );
    const paginationData = new Pagination(
      params.page,
      response.data.pagination.last_visible_page,
      response.data.pagination.items.total
    );
    return {
      mangas,
      paginationData,
    };
  }
}
