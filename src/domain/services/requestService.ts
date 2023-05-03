import axios from "axios";
import { IHttpService } from "../interfaces/http/IHttpService";
import { HttpResponse } from "../models/httpResponse";

export class RequestService implements IHttpService {
  async getData(
    url: string,
    body: any,
    config?: any,
    method: "post" | "get" = "get"
  ) {
    if (method === "get") {
      const response = await axios.get(url);

      return new HttpResponse(response.data, response.status);
    } else {
      const response = await axios.post(url, body);

      return new HttpResponse(response.data, response.status);
    }
  }
}
