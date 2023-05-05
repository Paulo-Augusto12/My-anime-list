// DTO's

import { GetAllAnimesDTO } from "../../src/domain/dto/GetAllAnimesDTO";

//

// Repositories interfaces

import { IGetAllAnimeRepository } from "../../src/domain/interfaces/AnimeRepository/IGetAllAnimeRepository";

//

// Http

import { IHttpService } from "../../src/domain/interfaces/http/IHttpService";
import { HttpResponse } from "../../src/domain/models/httpResponse";

//

// Request Params

import { IGetAllAnimeRequestParams } from "../../src/domain/useCases/AnimeUseCases/abstractions/IGetAllAnimeUseCase";

//

export class FakeAnimeRepository implements IGetAllAnimeRepository {
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
}
