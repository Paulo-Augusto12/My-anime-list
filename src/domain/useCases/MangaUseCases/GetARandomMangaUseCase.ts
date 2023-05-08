export class GetARandomMangaUseCase implements IGetARandomMangaUseCase {
    constructor(private repository: IGetARandomMangaRepository){}

    async execute(): Promise <IGetARandomMangaResponse> {
        const response = await this.repository.getARandomManga()

        return {}
    }
}