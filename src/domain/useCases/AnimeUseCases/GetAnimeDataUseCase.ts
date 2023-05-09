// use case interfaces

import {
  IGetAnimeDataRequestParams,
  IGetAnimeDataResponse,
  IGetAnimeDataUseCase,
} from "./abstractions/IGetAnimeDataUseCase";

//

// repository interfaces

import { IGetAnimeDataRepository } from "../../interfaces/AnimeRepository/IGetAnimeDataRepository";

//

export class GetAnimeDataUseCase implements IGetAnimeDataUseCase {
  constructor(private repository: IGetAnimeDataRepository) {}

  async execute(
    params: IGetAnimeDataRequestParams
  ): Promise<IGetAnimeDataResponse> {
    const response = await this.repository.getAnimeData(params);

    return {};
  }
}
