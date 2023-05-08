// Repository Interfaces

import { IGetAllMangaRepository } from "../domain/interfaces/MangaRepository/IGetAllMangaRepository";
import { ISearchForAnMangaRepository } from "../domain/interfaces/MangaRepository/ISearchForAnMangaRepository";
import { IGetTrendingMangasRepository } from "../domain/interfaces/MangaRepository/IGetTrendingMangasRepository";
import { IGetARandomMangaRepository } from "../domain/interfaces/MangaRepository/IGetARandomMangaRepository";

//

// DTO's

import { GetAllMangaDTO } from "../domain/dto/GetAllMangaDTO";
import { GetARandomMangaDTO } from "../domain/dto/GetARandomMangaDTO";
import { GetTrendingMangasDTO } from "../domain/dto/GetTrendingMangasDTO";

//

// Request params

import { IGetAllMangaRequestParams } from "../domain/useCases/MangaUseCases/abstractions/IGetAllMangaUseCase";
import { ISearchForAnMangaRequestParams } from "../domain/useCases/MangaUseCases/abstractions/ISearchForAnMangaUseCase";
import { IGetTrendingMangasRequestParams } from "../domain/useCases/MangaUseCases/abstractions/IGetTrendingMangasUseCase";

//

// Http

import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";

//

export class MangasRepository
  implements
    IGetAllMangaRepository,
    IGetARandomMangaRepository,
    IGetTrendingMangasRepository,
    ISearchForAnMangaRepository
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

  async searchForAnManga({
    page,
    limit,
    query,
  }: ISearchForAnMangaRequestParams): Promise<HttpResponse<GetAllMangaDTO>> {
    const response = await this.httpService.getData(
      `https://api.jikan.moe/v4/manga?q=${query}&page=${page}&limit=${limit}`,
      {
        page,
        limit,
        query,
      }
    );

    return response;
  }
}
