export const RightCart = ({ path, alt, title, text }) => {
  return (
    <div className='flex justify-end w-full h-fit relative'>
      <img
        className = 'object-cover -ml-1'
        width     = {335}
        height    = {255}
        src       = {path}
        alt       = {alt}
      />
      <div className='
        w-[450px] h-[50px] bg-[#EE6C4D] 
        absolute rounded-l-lg bottom-0
        flex items-center justify-start 
      '>
        <span className='open-sans text-2xl text-white font-bold ml-18'>
          {title}
        </span>
      </div>
      <p className='
        open-sans text-[20px] w-60 h-fit self-end pretty-text ml-2 mb-15
        font-medium p-2 text-[#293241] leading-relaxed tracking-wide 
        bg-[#f8f4eb] rounded-lg shadow-sm border border-[#e0ddd5]
      '>
        {text}
      </p>
    </div>
  )
}