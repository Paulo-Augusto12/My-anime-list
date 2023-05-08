// Use case interface

import { IGetARandomMangaUseCase } from "./abstractions/IGetARandomMangaUseCase";

//

// Repository interface

import { IGetARandomMangaRepository } from "../../interfaces/MangaRepository/IGetARandomMangaRepository";

//

// Models

import { Manga } from "./models/Manga";

//

export class GetARandomMangaUseCase implements IGetARandomMangaUseCase {
  constructor(private repository: IGetARandomMangaRepository) {}

  async execute(): Promise<Manga> {
    const response = await this.repository.getARandomManga();

    const data = response.data.data;
    return new Manga(data.title, data.images.webp.image_url, data.chapters);
  }
}
