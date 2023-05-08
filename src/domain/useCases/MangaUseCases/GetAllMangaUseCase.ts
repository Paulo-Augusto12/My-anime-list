import { IGetAllMangaRepository } from "../../interfaces/MangaRepository/IGetAllMangaRepository";
import {
  IGetAllMangaRequestParams,
  IGetAllMangaResponse,
  IGetAllMangaUseCase,
} from "./abstractions/IGetAllMangaUseCase";

export class GetAllMangaUseCase implements IGetAllMangaUseCase {
  constructor(private repository: IGetAllMangaRepository) {}

  async execute(
    params: IGetAllMangaRequestParams
  ): Promise<IGetAllMangaResponse> {
    const response = await this.repository.getAllManga(params);

    return {};
  }
}
