import { IGetAllAnimeRepository } from "../../interfaces/AnimeRepository/IGetAllAnimeRepository";
import { AnimeModel } from "./Models/AnimeModels";
import {
  IGetAllAnimeRequestParams,
  IGetAllAnimeResponse,
  IGetAllAnimeUseCase,
} from "./abstractions/IGetAllAnimeUseCase";

export class GetAllAnimeUseCase implements IGetAllAnimeUseCase {
  constructor(private repository: IGetAllAnimeRepository) {}

  async execute(params: IGetAllAnimeRequestParams): Promise<IGetAllAnimeResponse> {
    try {
      const response = await this.repository.getAllAnimes(params);

      const animes = response.data.data.map(
        (anime) =>
          new AnimeModel(
            anime.title,
            anime.images.jpg.image_url,
            anime.episodes,
            anime.synopsis
          )
      );
      const pagination = response.data.pagination

      return {
        animes,
        paginationInfo: {
          currentPage: params.page,
          hasNextPage: pagination.has_next_page,
          items: {
            perPage: pagination.items.per_page,
            count: pagination.items.count,
            total: pagination.items.total
          },
          lastPage: pagination.last_visible_page
        }
      }
    } catch (err) {
      console.log("[ GET ALL ANIME USE CASE ERROR ]", JSON.stringify(err));
      throw new Error(JSON.stringify(err));
    }
  }
}
