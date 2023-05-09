import { ISearchForAnAnimeRepository } from "../../interfaces/AnimeRepository/ISearchForAnAnimeRepository";
import { Pagination } from "../../models/pagination";
import { AnimeModel } from "./Models/AnimeModels";
import {
  ISearchForAnAnimeRequestParams,
  ISearchForAnAnimeResponse,
  ISearchForAnAnimeUseCase,
} from "./abstractions/ISearchForAnAnimeUseCase";

export class SearchForAnAnimeUseCase implements ISearchForAnAnimeUseCase {
  constructor(private repository: ISearchForAnAnimeRepository) {}

  async execute(
    params: ISearchForAnAnimeRequestParams
  ): Promise<ISearchForAnAnimeResponse> {
    try {
      const response = await this.repository.searchForAnAnime(params);

      const animes = response.data.data.map(
        ({ title_english, images, episodes }) =>
          new AnimeModel(title_english, images.jpg.image_url, episodes)
      );
      const paginationData = response.data.pagination;
      const pagination = new Pagination(
        params.page,
        paginationData.last_visible_page,
        paginationData.has_next_page,
        {
          count: paginationData.items.count,
          total: paginationData.items.total,
          perPage: paginationData.items.per_page,
        }
      );

      return {
        animes,
        paginationInfo: pagination,
      };
    } catch (err) {
      console.log("[ USE CASE ERROR ]");
      throw new Error(JSON.stringify(err));
    }
  }
}
