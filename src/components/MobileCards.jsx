import { LittleCard } from './LittleCard'

export const MobileCards = () => {
  return (
    <section
      className='
      container-fluid h-fit
      sm:hidden flex flex-col
    bg-neutral-200/20 py-10 px-2 gap-y-10
    '
    >
      <LittleCard
        title = 'Comunidad'
        path  = '/images/comunidad.png'
        alt   = 'Foto comunidad'
        text  = 'Una comunidad educativa con principios y valores'
      />

    <LittleCard
        title = 'Sala de informática'
        path  = '/images/informatica.png'
        alt   = 'Sala de informática'
        text  = 'Sala de informática de vanguardia'
      />

  <LittleCard
        title = 'Biblioteca'
        path  = '/images/biblioteca.png'
        alt   = 'Biblioteca'
        text  = 'Contamos con una excelente biblioteca'
      />
      
    </section>
  )
}