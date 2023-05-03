import { FullCharacter } from "../models/FullCharacter";

export interface IGetARandomCharacterUseCase {
    execute(): Promise <FullCharacter>
}