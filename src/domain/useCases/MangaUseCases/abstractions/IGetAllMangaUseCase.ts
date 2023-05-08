export interface IGetAllMangaResponse {}

export interface IGetAllMangaRequestParams {
  page: number;
  limit: number;
}

export interface IGetAllMangaUseCase {
  execute(params: IGetAllMangaRequestParams): Promise<IGetAllMangaResponse>;
}
