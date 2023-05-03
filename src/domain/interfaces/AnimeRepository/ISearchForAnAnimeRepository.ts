import { GetAllAnimesDTO } from "../../dto/GetAllAnimesDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface ISearchForAnAnimeRepository {
  searchForAnAnime(query: string): Promise<HttpResponse<GetAllAnimesDTO>>;
}
