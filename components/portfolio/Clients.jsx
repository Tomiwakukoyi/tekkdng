import React from 'react'
import Image from "next/image";


const Clients = ({sector, image}) => {
  return (
    <section className=' flex flex-col items-center justify-center mx-auto bg-gray-200 w-fit p-3 rounded-2xl gap-4'>
       <Image
        src={`/images/${image}`}
        width={300}
        height={300}
        className=" rounded-2xl"
      />
        <span className=' font-medium'>{sector}</span>
    </section>
  )
}

export default Clients