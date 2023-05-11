import { GetAnimeDataDTO } from "../../dto/GetAnimeDataDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface IGetAnimeDataRepository {
  getAnimeData(animeId: number): Promise<HttpResponse<GetAnimeDataDTO>>;
}
