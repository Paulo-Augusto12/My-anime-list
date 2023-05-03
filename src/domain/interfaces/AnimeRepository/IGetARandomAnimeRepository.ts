import { GetARandomAnimeDTO } from "../../dto/GetARandomAnimeDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface IGetARandomAnimeRepository {
    getARandomAnime(): Promise <HttpResponse<GetARandomAnimeDTO>>
}