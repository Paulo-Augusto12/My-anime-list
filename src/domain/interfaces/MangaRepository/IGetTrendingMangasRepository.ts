import { GetTrendingMangasDTO } from "../../dto/GetTrendingMangasDTO";
import { HttpResponse } from "../../models/httpResponse";
import { IGetTrendingMangasRequestParams } from "../../useCases/MangaUseCases/abstractions/IGetTrendingMangasUseCase";

export interface IGetTrendingMangasRepository {
    getTrendingMangas(params: IGetTrendingMangasRequestParams): Promise <HttpResponse<GetTrendingMangasDTO>>
}