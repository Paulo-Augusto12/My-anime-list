import { IGetARandomCharacterRepository } from "../../interfaces/CharactersRepository/IGetARandomCharacterRepository";
import { IGetARandomCharacterUseCase } from "./abstractions/IGetARandomCharacterUseCase";
import { FullCharacter } from "./models/FullCharacter";

export class GetARandomCharacterUseCase implements IGetARandomCharacterUseCase {
    constructor(private repository: IGetARandomCharacterRepository){}

    async execute(): Promise<FullCharacter>{
        const response = await this.repository.getARandomCharacter();
        const data = response.data.data
        return new FullCharacter(data.name, data.images.jpg.image_url);
    }
}