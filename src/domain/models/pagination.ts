export class Pagination {
  constructor(
    readonly currentPage: number = 0,
    readonly lastPage: number = 0,
    readonly hasNextPage: boolean = false,
    readonly items: {
      count: number;
      total: number;
      perPage: number;
    } = {
      count: 0,
      total: 0,
      perPage: 0,
    }
  ) {}
}
