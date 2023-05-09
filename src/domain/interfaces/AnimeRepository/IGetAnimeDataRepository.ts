import { GetAnimeDataDTO } from "../../dto/GetAnimeDataDTO";
import { HttpResponse } from "../../models/httpResponse";
import { IGetAnimeDataRequestParams } from "../../useCases/AnimeUseCases/abstractions/IGetAnimeDataUseCase";

export interface IGetAnimeDataRepository {
  getAnimeData(
    params: IGetAnimeDataRequestParams
  ): Promise<HttpResponse<GetAnimeDataDTO>>;
}
