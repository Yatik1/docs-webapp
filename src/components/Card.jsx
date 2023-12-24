import React from 'react'
import {FaRegFileAlt} from "react-icons/fa"
import {LuDownload} from "react-icons/lu"

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
       <FaRegFileAlt />
       <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
       <div className="footer absolute bottom-0 left-0 w-full py-6 px-8">
          <div className='flex items-center justify-between mb-5 '>
            <h5>0.4mb</h5>
            <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
               <LuDownload size=".7em" color='#fff'/>
            </span>
          </div>
       </div>
    </div>
  )
}

export default Card