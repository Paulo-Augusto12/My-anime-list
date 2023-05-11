import { FullAnimeData } from "../Models/FullAnimeData";



export interface IGetAnimeDataUseCase {
  execute(animeId: number): Promise<FullAnimeData>;
}
