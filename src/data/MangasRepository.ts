// Repository Interfaces

import { IGetAllMangaRepository } from "../domain/interfaces/MangaRepository/IGetAllMangaRepository";
import { IGetARandomAnimeRepository } from "../domain/interfaces/AnimeRepository/IGetARandomAnimeRepository";

//

// DTO's

import { GetAllMangaDTO } from "../domain/dto/GetAllMangaDTO";
import { GetARandomAnimeDTO } from "../domain/dto/GetARandomAnimeDTO";

//

// Request params

import { IGetAllMangaRequestParams } from "../domain/useCases/MangaUseCases/abstractions/IGetAllMangaUseCase";

//

// Http

import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";
import { IGetTrendingMangasRepository } from "../domain/interfaces/MangaRepository/IGetTrendingMangasRepository";
import { GetTrendingMangasDTO } from "../domain/dto/GetTrendingMangasDTO";
import { IGetTrendingMangasRequestParams } from "../domain/useCases/MangaUseCases/abstractions/IGetTrendingMangasUseCase";
import { IGetARandomMangaRepository } from "../domain/interfaces/MangaRepository/IGetARandomMangaRepository";
import { GetARandomMangaDTO } from "../domain/dto/GetARandomMangaDTO";

//

export class MangasRepository
  implements
    IGetAllMangaRepository,
    IGetARandomMangaRepository,
    IGetTrendingMangasRepository
{
  constructor(private httpService: IHttpService) {}

  async getAllManga({
    limit,
    page,
  }: IGetAllMangaRequestParams): Promise<HttpResponse<GetAllMangaDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/manga?page=${page}&limit=${limit}`,
      { limit, page }
    );

    return response;
  }

  async getARandomManga(): Promise<HttpResponse<GetARandomMangaDTO>> {
    const response = await this.httpService.getData(
      "https://api.jikan.moe/v4/random/manga",
      {}
    );

    return response;
  }

  async getTrendingMangas({
    filter,
    limit,
    page,
    type,
  }: IGetTrendingMangasRequestParams): Promise<
    HttpResponse<GetTrendingMangasDTO>
  > {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/top/manga?type=${type}&filter=${filter}&page=${page}&limit=${limit}`,
      {
        filter,
        limit,
        page,
        type,
      }
    );
    return response;
  }
}
