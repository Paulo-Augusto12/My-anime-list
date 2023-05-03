import { AnimeDTO } from "../../dto/AnimeDTO";
import { HttpResponse } from "../../models/httpResponse";
import { IGetAllAnimeRequestParams } from "../../useCases/AnimeUseCases/abstractions/IGetAllAnimeUseCase";

export interface IGetAllAnimeRepository {
  getAllAnimes(
    params: IGetAllAnimeRequestParams
  ): Promise<HttpResponse<AnimeDTO>>;
}
