export interface Anime {
  id: string,
  title: string,
  description: string,
  metadata: AnimeMetadata
  img: string,
  editor: string,
  audio: string,
  subtitles: Array<string>
}

interface AnimeMetadata {
  rating: number,
  ratingCount: number,
  feedbackCount: number,
  isListed?: boolean
}