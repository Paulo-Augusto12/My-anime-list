import { HttpResponse } from "../../models/httpResponse";
import { IGetAllMangaRequestParams } from "../../useCases/MangaUseCases/abstractions/IGetAllMangaUseCase";

export interface IGetAllMangaRepository {
    getAllManga(params: IGetAllMangaRequestParams): Promise <HttpResponse<GetAllMangaDTO>>
}