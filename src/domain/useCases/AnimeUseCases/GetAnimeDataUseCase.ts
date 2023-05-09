// use case interfaces

import {
  IGetAnimeDataRequestParams,
  IGetAnimeDataResponse,
  IGetAnimeDataUseCase,
} from "./abstractions/IGetAnimeDataUseCase";

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
