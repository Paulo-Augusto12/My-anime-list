export class PaginationModel {
  constructor(
    readonly page: number = 0,
    readonly totalOfPages: number = 0,
    readonly pageSize: number = 0
  ) {}
}
