import { AnimeFinder } from "@/contexts/animes/application/find/AnimeFinder"
import { getAnimeRepository } from "@/extensions/dependency-injection/infrastructure"

var repository = getAnimeRepository()
var finder = new AnimeFinder(repository)

export default async function AnimeDetails ({
  params
}: { params: { id: string }}) {

  var anime = await finder.Find(params.id)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[350px_1fr] gap-x-8">
      <div className="flex flex-col gap-3">
        <picture>
          <img 
            className="aspect-[389/500] h-full object-cover max-w-full rounded" 
            src={anime.img} 
            alt={`Portada del anime ${anime.title}`} 
            style={{
              viewTransitionName: `anime-img-${anime.id}`
            }}
          />
        </picture>

        <button className="bg-gradient-to-tr from-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-500 px-4 py-2 rounded uppercase font-bold">
          Ver ahora
        </button>
        <button className="bg-gradient-to-tr border-2 border-black dark:border-white hover:bg-black hover:text-black dark:hover:bg-white dark:hover:text-black px-4 py-2 rounded uppercase font-bold">
          En mi lista
        </button>
      </div>
      <aside className="space-y-4">
        <h1 className="text-6xl font-black mb-4">{anime.title}</h1>

        {anime.subtitles.length && (
          <span className="px-2 py-1 rounded-full text-xs text-orange-500 ring-1 ring-orange-500 bg-orange-600 bg-opacity-20">
            Subtitulado
          </span>
        )}

        <p className="text-lg mb-4">{anime.description}</p>

        <div className="flex flex-col gap-2">
          <strong>Editor: <span className="font-semibold text-orange-700">{anime.editor}</span></strong>
          <strong>Audio: <span className="font-semibold text-orange-700">{anime.audio}</span></strong>
          <strong>Subtítulos: 
            <span className="font-semibold text-orange-700">
              &nbsp;{anime.subtitles.join(', ')}
            </span>
          </strong>
        </div>
      </aside>
    </div>   
  )
}