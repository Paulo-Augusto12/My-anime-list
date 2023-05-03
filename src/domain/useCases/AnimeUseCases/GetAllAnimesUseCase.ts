import { AnimeDTO } from "../../dto/AnimeDTO";
import { IGetAllAnimeRepository } from "../../interfaces/AnimeRepository/IGetAllAnimeRepository";
import { AnimeModel } from "./Models/AnimeModels";
import {
  IGetAllAnimeRequestParams,
  IGetAllAnimeUseCase,
} from "./abstractions/IGetAllAnimeUseCase";

export class GetAllAnimeUseCase implements IGetAllAnimeUseCase {
  constructor(private repository: IGetAllAnimeRepository) {}

  async execute(params: IGetAllAnimeRequestParams): Promise<AnimeModel[]> {
    try {
      const response = await this.repository.getAllAnimes(params);

      return response.data.animes.map(
        (anime) =>
          new AnimeModel(
            anime.title_english,
            anime.images.jpg.image_url,
            anime.episodes
          )
      );
    } catch (err: any) {
      throw new Error("[ USE CASE ]", err);
    }
  }
}
