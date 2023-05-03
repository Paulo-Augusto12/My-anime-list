import { AnimeDTO } from "../domain/dto/AnimeDTO";
import { IGetAllAnimeRepository } from "../domain/interfaces/AnimeRepository/IGetAllAnimeRepository";
import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";
import { IGetAllAnimeRequestParams } from "../domain/useCases/AnimeUseCases/abstractions/IGetAllAnimeUseCase";

export class AnimesRepository implements IGetAllAnimeRepository {
  constructor(private httpService: IHttpService) {}

  async getAllAnimes(
    params: IGetAllAnimeRequestParams
  ): Promise<HttpResponse<AnimeDTO>> {
    const response = await this.httpService.getData(
      "https://api.jikan.moe/v4/anime",
      params
    );

    return response;
  }
}
