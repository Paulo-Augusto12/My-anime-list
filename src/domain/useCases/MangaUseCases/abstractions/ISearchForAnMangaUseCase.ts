import { Manga } from "../models/Manga";
import { Pagination } from "../models/Pagination";

export interface ISearchForAnMangaRequestParams {
    query: string;
    page: number;
    limit: number
}

export interface ISearchForAnMangaResponse {
    mangas: Manga[],
    pagination: Pagination
}

export interface ISearchForAnMangaUseCase {
    execute(params: ISearchForAnMangaRequestParams): Promise <ISearchForAnMangaResponse>
}