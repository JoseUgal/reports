import { Anime } from "../../domain/Anime";
import { AnimeRepository } from "../../domain/AnimeRepository";

export class AnimesSearcher{

  private readonly _repository: AnimeRepository

  constructor(repository: AnimeRepository) {
    this._repository = repository
  }

  async Search(): Promise<Anime[]> {
    const animes = await this._repository.SearchAll()

    return animes;
  }
}