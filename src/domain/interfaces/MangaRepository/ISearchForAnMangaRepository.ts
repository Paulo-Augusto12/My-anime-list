import { GetAllMangaDTO } from "../../dto/GetAllMangaDTO";
import { HttpResponse } from "../../models/httpResponse";
import { ISearchForAnMangaRequestParams } from "../../useCases/MangaUseCases/abstractions/ISearchForAnMangaUseCase";

export interface ISearchForAnMangaRepository {
    searchForAnManga(params: ISearchForAnMangaRequestParams): Promise <HttpResponse<GetAllMangaDTO>>
}