
// Models

import { IGetTrendingMangasRequestParams, IGetTrendingMangasResponse, IGetTrendingMangasUseCase } from "./abstractions/IGetTrendingMangasUseCase"
import { Manga } from "./models/Manga"
import { Pagination } from "./models/Pagination"

//

export class GetTrendingMangasUseCase implements IGetTrendingMangasUseCase {
    constructor(private repository: IGetTrendingMangasRepository){}

    async execute(params: IGetTrendingMangasRequestParams): Promise <IGetTrendingMangasResponse> {
        const response = await this.repository.getTrendingMangas(params)

        const mangas = new Manga()
        const pagination = new Pagination()

        return {
            mangas,
            pagination
        }
    }
}