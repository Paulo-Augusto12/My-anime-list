export class HttpResponse<T = any> {
  constructor(readonly data: T, readonly status: string) {}
}
