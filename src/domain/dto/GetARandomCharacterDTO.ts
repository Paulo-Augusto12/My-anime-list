export interface GetARandomCharacterDTO {
    data: Data
  }
  
  export interface Data {
    mal_id: number
    url: string
    images: Images
    name: string
    name_kanji: string
    nicknames: string[]
    favorites: number
    about: string
  }
  
  export interface Images {
    jpg: Jpg
    webp: Webp
  }
  
  export interface Jpg {
    image_url: string
    small_image_url: string
  }
  
  export interface Webp {
    image_url: string
    small_image_url: string
  }
  