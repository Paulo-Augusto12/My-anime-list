import { FullAnime } from "../Models/FullAnime";

export interface IGetARandomAnimeUseCase {
    execute(): Promise <FullAnime>
}