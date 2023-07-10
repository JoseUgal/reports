import { Anime } from "../domain/Anime";
import { AnimeRepository } from "../domain/AnimeRepository";

import animesJSON from './animes.json'

export class JSONAnimeRepository implements AnimeRepository {
  async Find (animeId: string): Promise<Anime> {
    var anime = animesJSON.find(anime => anime.id === animeId);

    if(!anime) throw Error(`<Anime> not exists with id ${animeId}`)

    return Promise.resolve(anime);
  }
  
  async SearchAll(): Promise<Anime[]> {
    var animes = animesJSON.map(({ id, title, description, img, metadata, subtitles, audio, editor }) => {
      return {
        id, 
        title, 
        description, 
        img, 
        metadata, 
        subtitles, 
        audio, 
        editor
      } as Anime
    })

    return Promise.resolve(animes) 
  }

}