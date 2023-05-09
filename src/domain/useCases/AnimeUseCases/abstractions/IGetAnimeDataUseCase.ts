export interface IGetAnimeDataRequestParams {}

export interface IGetAnimeDataResponse {}

export interface IGetAnimeDataUseCase {
  execute(params: IGetAnimeDataRequestParams): Promise<IGetAnimeDataResponse>;
}
