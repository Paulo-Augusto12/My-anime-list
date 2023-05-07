// Repository interfaces

import { IGetAllAnimeRepository } from "../domain/interfaces/AnimeRepository/IGetAllAnimeRepository";
import { ISearchForAnAnimeRepository } from "../domain/interfaces/AnimeRepository/ISearchForAnAnimeRepository";
import { IGetTrendingAnimesRepository } from "../domain/interfaces/AnimeRepository/IGetTrendingAnimesRepository";
import { IGetARandomAnimeRepository } from "../domain/interfaces/AnimeRepository/IGetARandomAnimeRepository";

//

// Http

import { HttpResponse } from "../domain/models/httpResponse";
import { IHttpService } from "../domain/interfaces/http/IHttpService";

//

// Repository request params

import { IGetAllAnimeRequestParams } from "../domain/useCases/AnimeUseCases/abstractions/IGetAllAnimeUseCase";
import { IGetTrendingAnimeRequestParams } from "../domain/useCases/AnimeUseCases/abstractions/IGetTrendingAnimesUseCase";
import { ISearchForAnAnimeRequestParams } from "../domain/useCases/AnimeUseCases/abstractions/ISearchForAnAnimeUseCase";

//

// DTO's

import { GetAllAnimesDTO } from "../domain/dto/GetAllAnimesDTO";
import { TrendingAnimeDTO } from "../domain/dto/TrendingAnimeDTO";
import { GetARandomAnimeDTO } from "../domain/dto/GetARandomAnimeDTO";

//

export class AnimesRepository
  implements
    IGetAllAnimeRepository,
    ISearchForAnAnimeRepository,
    IGetTrendingAnimesRepository,
    IGetARandomAnimeRepository
{
  constructor(private httpService: IHttpService) {}

  async getAllAnimes(
    params: IGetAllAnimeRequestParams
  ): Promise<HttpResponse<GetAllAnimesDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/anime?page=${params.page}&limit=${params.limit}`,
      params
    );

    return response;
  }

  async searchForAnAnime({
    limit,
    page,
    query,
  }: ISearchForAnAnimeRequestParams): Promise<HttpResponse<GetAllAnimesDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/anime?q=${query}&page=${page}&limit=${limit}`,
      query
    );

    return response;
  }

  async getTrendingAnimes(
    params: IGetTrendingAnimeRequestParams
  ): Promise<HttpResponse<TrendingAnimeDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/top/anime?type=${params.type}&filter=${params.filterBy}&page=${params.page}&limit=${params.limit}`,
      params
    );

    return response;
  }

  async getARandomAnime(): Promise<HttpResponse<GetARandomAnimeDTO>> {
    const response = await this.httpService.getData(
      "https://api.jikan.moe/v4/random/anime",
      {}
    );

    return response;
  }
}
