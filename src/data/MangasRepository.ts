// Repository Interfaces

import { IGetAllMangaRepository } from "../domain/interfaces/MangaRepository/IGetAllMangaRepository";

//

// DTO's

import { GetAllMangaDTO } from "../domain/dto/GetAllMangaDTO";

//

// Request params

import { IGetAllMangaRequestParams } from "../domain/useCases/MangaUseCases/abstractions/IGetAllMangaUseCase";

//

// Http

import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";

//

export class MangasRepository implements IGetAllMangaRepository {
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
}
