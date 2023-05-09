export class FullAnimeData {
  constructor(
    readonly name: string = "",
    readonly image: string = "",
    readonly my_anime_list_id: number = 0,
    readonly airing_status: string = "",
    readonly restriction_age_rating: string = "",
    readonly aired: string = "",
    readonly score: number = 0,
    readonly synopsis: string = "",
    readonly studios: Array<any> = [],
    readonly genres: Array<any> = [],
    readonly streaming_on: Array<any> = []
  ) {}
}
