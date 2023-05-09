export class GetAnimeDataUseCase implements IGetAnimeDataUseCase {
  constructor(private repository: IGetAnimeDataRepository) {}

  async execute(
    params: IGetAnimeDataRequestParams
  ): Promise<IGetAnimeDataResponse> {
    const response = await this.repository.getAnimeData(params);

    return {};
  }
}
