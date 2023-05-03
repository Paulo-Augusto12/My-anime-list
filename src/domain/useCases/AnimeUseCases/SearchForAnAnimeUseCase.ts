import { ISearchForAnAnimeRepository } from "../../interfaces/AnimeRepository/ISearchForAnAnimeRepository";
import { AnimeModel } from "./Models/AnimeModels";
import { ISearchForAnAnimeUseCase } from "./abstractions/ISearchForAnAnimeUseCase";

export class SearchForAnAnimeUseCase implements ISearchForAnAnimeUseCase {
  constructor(private repository: ISearchForAnAnimeRepository) {}

  async execute(query: string): Promise<AnimeModel[]> {
    try {
      const response = await this.repository.searchForAnAnime(query);

      return response.data.data.map(
        ({ title_english, images, episodes }) =>
          new AnimeModel(title_english, images.jpg.image_url, episodes)
      );
    } catch (err) {
      console.log('[ USE CASE ERROR ]')
      throw new Error(JSON.stringify(err));
    }
  }
}
