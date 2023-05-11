// use case interfaces

import { IGetAnimeDataUseCase } from "./abstractions/IGetAnimeDataUseCase";

//

// repository interfaces

import { IGetAnimeDataRepository } from "../../interfaces/AnimeRepository/IGetAnimeDataRepository";

//

// models

import { FullAnimeData } from "./Models/FullAnimeData";

//

export class GetAnimeDataUseCase implements IGetAnimeDataUseCase {
  constructor(private repository: IGetAnimeDataRepository) {}

  async execute(animeId: number): Promise<FullAnimeData> {
    const response = await this.repository.getAnimeData(animeId);

    const data = response.data.data;

    const anime = new FullAnimeData(
      data.title,
      data.images.webp.large_image_url,
      data.mal_id,
      data.aired.from + data.aired.to
    );

    return anime;
  }
}
