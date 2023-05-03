import { AnimeDTO } from "../domain/dto/AnimeDTO";

// Repository interfaces

import { IGetAllAnimeRepository } from "../domain/interfaces/AnimeRepository/IGetAllAnimeRepository";
import { ISearchForAnAnimeRepository } from "../domain/interfaces/AnimeRepository/ISearchForAnAnimeRepository";

//

// Http

import { HttpResponse } from "../domain/models/httpResponse";
import { IHttpService } from "../domain/interfaces/http/IHttpService";

//

// Repository request params

import { IGetAllAnimeRequestParams } from "../domain/useCases/AnimeUseCases/abstractions/IGetAllAnimeUseCase";

//

export class AnimesRepository
  implements IGetAllAnimeRepository, ISearchForAnAnimeRepository
{
  constructor(private httpService: IHttpService) {}

  async getAllAnimes(
    params: IGetAllAnimeRequestParams
  ): Promise<HttpResponse<AnimeDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/anime?page=${params.page}&limit=${params.limit}`,
      params
    );

    return response;
  }

  async searchForAnAnime(query: string): Promise<HttpResponse<AnimeDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/anime?q=${query}`,
      query
    );

    return response;
  }
}
