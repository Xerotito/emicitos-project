export const NavBarButton = ({label}) => {
  return (
    <button className='
      p-2 bg-[#a2c1d7] sm:w-[140px]
      love-font 
      border-b-1 border-blue-500/20
      sm:border-none  
      cursor-pointer
    '>
      {label}
    </button>
  )
}