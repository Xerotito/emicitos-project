export const LeftCard = ({ path, alt, title, text, className }) => {
  return (
    <div className='flex w-full h-fit relative'>
      <img
        className = 'object-cover'
        width     = {335}
        height    = {255}
        src       = {path}
        alt       = {alt}
      />
      <div className={`        
        w-[450px] h-[50px] bg-[#EE6C4D] 
        absolute mt-2 rounded-r-lg j
        flex items-center justify-end
        ${className}
        `}>
        <span className='open-sans text-2xl text-white font-bold mr-18'>
          {title}
        </span>
      </div>
      <p className='
        open-sans text-[20px] w-60 h-fit self-end pretty-text ml-2 mb-1
        font-medium p-2 text-[#293241] leading-relaxed tracking-wide 
        bg-[#f8f4eb] rounded-lg shadow-sm border border-[#e0ddd5]
      '>
        {text}
      </p>
    </div>

  )
}