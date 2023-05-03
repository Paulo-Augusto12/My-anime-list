import axios from "axios";
import { AnimeDTO } from "../../domain/dto/AnimeDTO";
export async function getAllAnimes() {
  try {
  } catch (err) {
    console.log("[ API CALL ]", err);
  }
  const BASEURL = "https://api.jikan.moe/v4/anime";

  const data = await axios.get<AnimeDTO>(BASEURL);

  return data.data;
}
