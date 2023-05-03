import { AnimeDTO } from "../../dto/AnimeDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface ISearchForAnAnimeRepository {
    searchForAnAnime(query: string): Promise<HttpResponse<AnimeDTO>>
}