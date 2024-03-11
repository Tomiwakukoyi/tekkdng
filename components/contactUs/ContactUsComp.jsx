import React from 'react'

const ContactUsComp = ({name, spanContent}) => {
  return (
    <div className=' flex flex-col gap-3 pb-2 items-center'>
        <div className=' rounded-full h-16 w-16 bg-[#17a2b8]'></div>
        <div className=' flex items-center justify-center gap-1 w-[50%] text-wrap'>
            <h1 className='flex text-center flex-col items-center gap-1'>{name}: <span className=' text-[#17a2b8] text-sm '><a href="">{spanContent}</a></span> </h1>
        </div>
    </div>
  )
}

export default ContactUsComp