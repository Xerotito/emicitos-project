import { LeftCard } from './LeftCard'
import { RightCart } from './RightCart'

export const DesktopCards = () => {
  return (
    <section className='
      container-fluid h-fit 
      hidden sm:flex flex-col 
    bg-neutral-200/10 p-4 gap-y-15
    '>
      <LeftCard
        path      = '/images/comunidad.png'
        alt       = 'Comunidad'
        title     = 'Comunidad'
        text      = 'Una comunidad educativa con principios y valores'
        className = {'ml-1'}
      />
      <RightCart
        path  = '/images/informatica.png'
        alt   = 'Sala de informática'
        title = 'Sala de informática'
        text  = 'Sala de informática de vanguardia'
      />
      <LeftCard
        path  = '/images/biblioteca.png'
        alt   = 'Biblioteca'
        title = 'Biblioteca'
        text  = 'Contamos con una excelente biblioteca escolar'
      />
    </section>
  )
}
