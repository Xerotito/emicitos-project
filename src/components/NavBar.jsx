import { NavBarButton } from './NavBarButton'

export const NavBar = () => {
  return (
    <nav className='flex flex-col sm:flex-row justify-center sm:gap-x-2 lg:gap-x-4 sm:-mt-5'>
      <NavBarButton label='¿Quienes Somos?' />
      <NavBarButton label='Oferta Educativa' />
      <NavBarButton label='Comunidad' />
      <NavBarButton label='Contacto' />
    </nav>
  )
}