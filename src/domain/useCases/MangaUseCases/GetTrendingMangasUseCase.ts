// useCase interfaces

import {
  IGetTrendingMangasRequestParams,
  IGetTrendingMangasResponse,
  IGetTrendingMangasUseCase,
} from "./abstractions/IGetTrendingMangasUseCase";

//

// Repository interfaces

import { IGetTrendingMangasRepository } from "../../interfaces/MangaRepository/IGetTrendingMangasRepository";

//

// Models

import { Manga } from "./models/Manga";
import { Pagination } from "./models/Pagination";

//

export class GetTrendingMangasUseCase implements IGetTrendingMangasUseCase {
  constructor(private repository: IGetTrendingMangasRepository) {}

  async execute(
    params: IGetTrendingMangasRequestParams
  ): Promise<IGetTrendingMangasResponse> {
    const response = await this.repository.getTrendingMangas(params);

    const mangas = response.data.data.map(
      ({ title, images, chapters }) =>
        new Manga(title, images.webp.image_url, chapters)
    );
    const pagination = new Pagination();

    return {
      mangas,
      pagination,
    };
  }
}
