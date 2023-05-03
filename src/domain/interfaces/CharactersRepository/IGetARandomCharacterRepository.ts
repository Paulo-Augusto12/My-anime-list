import { GetARandomCharacterDTO } from "../../dto/GetARandomCharacterDTO";
import { HttpResponse } from "../../models/httpResponse";

export interface IGetARandomCharacterRepository {
  getARandomCharacter(): Promise<HttpResponse<GetARandomCharacterDTO>>;
}
