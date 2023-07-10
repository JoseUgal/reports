import { AnimesSearcher } from "@/contexts/animes/application/searchAll/AnimesSearcher";
import { getAnimeRepository } from "@/extensions/dependency-injection/infrastructure";
import { AnimeItem } from "./AnimeItem";
import Link from "next/link";

const repository = getAnimeRepository()

export const ListOfAnimes = async () => {
  const searcher = new AnimesSearcher(repository);
  const animes = await searcher.Search();

  return (
    <section>
        <div className="space-y-1">
          <h1 className="text-xl">Nuestras recomendaciones</h1>
          <div className="h-1 bg-gradient-to-tr from-orange-500 to-gray-850" />
        </div>  

        <div className="flex flex-nowrap overflow-x-auto gap-4 py-4">
          {animes.map(({ id, img, title }) => {
            return (
              <Link key={id}  href={`/anime/${id}`}>
                <AnimeItem id={id} img={img} title={title} />
              </Link>
            )
          })}
        </div>
      </section>
  )
}