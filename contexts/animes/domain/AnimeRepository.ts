/* eslint-disable no-unused-vars */
import { Anime } from "./Anime";

export interface AnimeRepository {
  SearchAll: () => Promise<Anime[]>
  Find: (animeId: string) => Promise<Anime>
}