import Image from "next/image"

interface Props {
  title: string,
  img: string,
  id: string
}

export const AnimeItem: React.FC<Props> = ({ id, title, img }) => {
  return (
    <Image  
      className='hover:scale-105 hover:contrast-125 aspect-[710/1125] object-cover rounded h-full min-w-[160px]' 
      src={img} 
      width={200} 
      height={400}   
      alt={`Imagen portada de ${title}`} 
      style={{
        viewTransitionName: `anime-img-${id}`
      }}
    />
  )
}