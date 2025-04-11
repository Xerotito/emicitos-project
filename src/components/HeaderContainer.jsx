export const HeaderContainer = () => {
  return (
    <header className='flex justify-center sm:w-full bg-[#98C1D9]/80 '>
      <div
        className='
        flex justify-center items-center
        container-fluid h-30 
        love-font text-[#232891]
        relative
    '>
        <div className='w-full flex items-center justify-around sm:justify-between relative'>
          <img
            src='/images/logo-argentina.png'
            alt='logo de Argentina'
            className='
            absolute sm:relative
            h-30 sm:h-25
            -left-[52px] sm:left-0
      '/>
          <h1 className='text-[35px] sm:text-[50px] z-10'>Colegio Argentino</h1>
          <img
            src='/images/logo-mate.png'
            alt='logo de Argentina'
            className='
            absolute sm:relative
            h-28 sm:h-20
            -right-13 -bottom-4 sm:right-0
        '/>
        </div>
      </div>
    </header>
  )
}