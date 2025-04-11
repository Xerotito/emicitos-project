export const LittleCard = ({ path, alt, title, text, className }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full relative'>
      <div className='
          w-[98%] p-2  bg-[#EE6C4D] rounded-xl
          absolute mt-2 -top-0
          flex justify-center items-center
      '>
        <span className='open-sans text-2xl text-white font-bold'>
          {title}
        </span>
      </div>
      <img
        className = 'w-[500px] h-[300px] object-cover pointer-events-none select-none'
        src       = {path}
        alt       = {alt}
      />
      <p className='
          open-sans text-[20px] text-pretty text-center 
          font-medium p-2 text-[#293241] leading-relaxed tracking-wide 
        bg-[#f8f4eb] rounded-lg shadow-sm border border-[#e0ddd5]
      '>
        {text}
      </p>
    </div>
  )
}