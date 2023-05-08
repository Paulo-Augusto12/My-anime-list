import { Manga } from "../models/Manga";

export interface IGetARandomMangaUseCase {
    execute(): Promise <Manga>
}