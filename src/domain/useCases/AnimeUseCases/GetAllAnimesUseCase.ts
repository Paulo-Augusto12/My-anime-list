import { AnimeDTO } from "../../../api/dto/AnimeDTO";
import { IGetAllAnimeRepository } from "../../interfaces/AnimeRepository/IGetAllAnimeRepository";
import { IGetAllAnimeRequestParams, IGetAllAnimeUseCase } from "./abstractions/IGetAllAnimeUseCase";


export class GetAllAnimeUseCase implements IGetAllAnimeUseCase {
    constructor(private repository: IGetAllAnimeRepository) {}

    async execute(params: IGetAllAnimeRequestParams): Promise <AnimeDTO> {
        const response = await this.repository.getAllAnimes(params);

        return response.data
    }
}