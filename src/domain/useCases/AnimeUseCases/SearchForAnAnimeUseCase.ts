import { ISearchForAnAnimeRepository } from "../../interfaces/AnimeRepository/ISearchForAnAnimeRepository";
import { AnimeModel } from "./Models/AnimeModels";
import { ISearchForAnAnimeRequestParams, ISearchForAnAnimeResponse, ISearchForAnAnimeUseCase } from "./abstractions/ISearchForAnAnimeUseCase";

export class SearchForAnAnimeUseCase implements ISearchForAnAnimeUseCase {
  constructor(private repository: ISearchForAnAnimeRepository) {}

  async execute(params: ISearchForAnAnimeRequestParams): Promise<ISearchForAnAnimeResponse> {
    try {
      const response = await this.repository.searchForAnAnime(params);

      const animes = response.data.data.map(
        ({ title_english, images, episodes }) =>
          new AnimeModel(title_english, images.jpg.image_url, episodes)
      );

      const pagination = response.data.pagination

      return {
        animes,
        paginationInfo: {
          currentPage: params.page,
          hasNextPage: pagination.has_next_page,
          lastPage: pagination.last_visible_page,
          items: {
            count: pagination.items.count,
            perPage: pagination.items.per_page,
            total: pagination.items.total
          },
        }
      }
    } catch (err) {
      console.log("[ USE CASE ERROR ]");
      throw new Error(JSON.stringify(err));
    }
  }
}
