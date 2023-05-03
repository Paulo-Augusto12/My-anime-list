import { AnimeModel } from "../Models/AnimeModels";

export interface ISearchForAnAnimeUseCase {
  execute(query: string): Promise<AnimeModel[]>;
}
