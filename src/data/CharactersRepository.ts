import { GetARandomCharacterDTO } from "../domain/dto/GetARandomCharacterDTO";
import { IGetARandomCharacterRepository } from "../domain/interfaces/CharactersRepository/IGetARandomCharacterRepository";
import { IHttpService } from "../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../domain/models/httpResponse";

export class CharactersRepository implements IGetARandomCharacterRepository {
  constructor(private httpService: IHttpService) {}

  async getARandomCharacter(): Promise<HttpResponse<GetARandomCharacterDTO>> {
    const response = await this.httpService.getData(
      "https://api.jikan.moe/v4/random/characters",
      {}
    );

    return response;
  }
}
