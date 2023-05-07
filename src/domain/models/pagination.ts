export class Pagination {
  constructor(
    readonly lastPage: number,
    readonly hasNextPage: boolean,
    readonly currentPage: number,
    readonly items: {
      readonly count: number;
      readonly total: number;
      readonly perPage: number;
    }
  ) {}
}
