import { TrendingAnimeDTO } from "../../dto/TrendingAnimeDTO";
import { HttpResponse } from "../../models/httpResponse";
import { IGetTrendingAnimeRequestParams } from "../../useCases/AnimeUseCases/abstractions/IGetTrendingAnimesUseCase";

export interface IGetTrendingAnimesRepository {
    getTrendingAnimes(params: IGetTrendingAnimeRequestParams): Promise <HttpResponse<TrendingAnimeDTO>>
}