import { Anime } from "../../domain/Anime";
import { AnimeRepository } from "../../domain/AnimeRepository";

export class AnimeFinder {
  private readonly _repository: AnimeRepository

  constructor(repository: AnimeRepository) {
    this._repository = repository;
  }

  async Find(animeId: string): Promise<Anime> {
    if(!animeId) throw Error('<AnimeId> is required for this action.')

    var anime = this._repository.Find(animeId);

    return anime;
  }
}