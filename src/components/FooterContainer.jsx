import { RedesButton } from './RedesButton'

export const FooterContainer = () => {
  return (
    <footer className='flex justify-center p-4'>
      <div className='container-fluid flex flex-col sm:flex-row '>
        {/* Ubicación */}
        <div className='w-full sm:w-[50%] flex justify-center items-center'>
          <img src="/images/maps.png" className='w-30 p-5 h-full object-cover' alt="" />
          <div className='flex flex-col p-4 font-serif font-medium'>
            <span>Armada Argentina 691</span>
            <span>Godoy Cruz</span>
            <span>Mendoza</span>
            <span>colegioargentino@gmail.com</span>
          </div>
        </div>
      {/* Redes sociales */}
        <div className='w-full sm:w-[50%] p-4 flex flex-col justify-center items-center'>
          <img src="/images/redes.png" alt="Redes sociales" className='sm:w-1/2 object-contain mt-4 sm:mt-0' />
          <div className='flex gap-x-2 mt-2 sm:mt-0'>
            <RedesButton path="/images/twitter.png" alt="Botón twitter" />
            <RedesButton path="/images/facebook.png" alt="Botón facebook" />
            <RedesButton path="/images/instagram.png" alt="Botón instagram" />
          </div>
        </div>

      </div>
    </footer>
  )
}