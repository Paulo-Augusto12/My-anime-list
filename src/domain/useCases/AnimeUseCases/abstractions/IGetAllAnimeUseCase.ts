import { AnimeDTO } from "../../../../api/dto/AnimeDTO";

export interface IGetAllAnimeRequestParams {
  page: number;
  limit: number;
}
export interface IGetAllAnimeUseCase {
  execute(params: IGetAllAnimeRequestParams): Promise<AnimeDTO>;
}
