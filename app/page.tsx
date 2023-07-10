import { ListOfAnimes } from "@/modules/animes/ListOfAnimes";

export default async function Home() {
  return (
    <div className="space-y-4">
      <ListOfAnimes />

      <section className="p-4 bg-gradient-to-l from-orange-500 to-yellow-400">
        <div className="bg-white dark:bg-black p-4 space-y-4">
          <div className="space-y-1">
            <h1 className="text-xl">Información del proyecto</h1>
            <div className="h-1 bg-gradient-to-tr from-orange-500 to-gray-850" />
          </div> 
          <p>
          Proyecto desarrollado por Codefastly para probar las nuevas Transition API de JavaScript.
          No pretendemos fomentar la pirateria. Únicamente compartimos varias series que nos parecen atractivas para 
          el maquetado de la web.
          </p>
        </div>
      </section>
    </div>
  )
}
