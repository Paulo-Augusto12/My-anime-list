import { GetAllAnimesDTO } from "../../dto/GetAllAnimesDTO";
import { HttpResponse } from "../../models/httpResponse";
import { ISearchForAnAnimeRequestParams } from "../../useCases/AnimeUseCases/abstractions/ISearchForAnAnimeUseCase";

export interface ISearchForAnAnimeRepository {
  searchForAnAnime(params: ISearchForAnAnimeRequestParams): Promise<HttpResponse<GetAllAnimesDTO>>;
}
