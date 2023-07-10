import { AnimeRepository } from "@/contexts/animes/domain/AnimeRepository"
import { JSONAnimeRepository } from "@/contexts/animes/infrastructure/JSONAnimeRepository"

export const getAnimeRepository = (): AnimeRepository => {
  const repository = new JSONAnimeRepository()
  
  return repository
}