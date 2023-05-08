import { GetARandomMangaDTO } from "../../dto/GetARandomMangaDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface IGetARandomMangaRepository {
    getARandomManga(): Promise <HttpResponse<GetARandomMangaDTO>>
}