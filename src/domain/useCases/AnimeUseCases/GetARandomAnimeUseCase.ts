import { IGetARandomAnimeRepository } from "../../interfaces/AnimeRepository/IGetARandomAnimeRepository";
import { FullAnime } from "./Models/FullAnime";
import { IGetARandomAnimeUseCase } from "./abstractions/IGetARandomAnimeUseCase";

export class GetARandomAnimeUseCase implements IGetARandomAnimeUseCase {
  constructor(private repository: IGetARandomAnimeRepository) {}

  async execute(): Promise<FullAnime> {
    const response = await this.repository.getARandomAnime();

    const data = response.data.data;

    return new FullAnime(
      data.title_english,
      data.synopsis,
      data.airing,
      data.popularity,
      data.score
    );
  }
}
