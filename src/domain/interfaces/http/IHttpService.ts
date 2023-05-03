import { HttpResponse } from "../../models/httpResponse";

export interface IHttpService {
  getData: <T = any>(
    url: string,
    body: any,
    config?: any,
    method?: "post" | "get"
  ) => Promise<HttpResponse<T>>;
}
