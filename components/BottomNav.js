import React from 'react'
import{ForwardIcon, BackwardIcon} from '@heroicons/react/24/outline';

function BottomNav({previousPage, nextPage}) {
  return (
    <div className='flex flex-col sm:flex-row m-5 border=2 justify-between items-center'>
         <div className=' flex flex-grow ml-3 justify-evenly max-w-8xl'>
            <div className= "flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            <BackwardIcon
                onClick={previousPage}
                className="right-[10px]  cursor-pointer group-hover:animate-bounce"
                size={2}
              />
               <p className=" opacity-0 group-hover:opacity-100 tracking-widest">Previous</p>
                </div>
                <div className= "flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
              <ForwardIcon
                onClick={nextPage}
                className=' right-[10px]  cursor-pointer  group-hover:animate-bounce'
                size={2}
              />
               <p className=" opacity-0 group-hover:opacity-100 tracking-widest">Next</p>
               </div>
               </div>
      
    </div>
  )
}

export default BottomNav
