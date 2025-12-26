import React from 'react'

const HeroFooter = ({tasks,navState}) => {

  return (
    <div className='hero-footer w-full  bg-zinc-50 flex justify-end   border-t border-zinc-300 '>
       <div className='w-[60%] py-5  flex items-center justify-between m-auto'>
           <span className='text-zinc-600 text-lg font-medium'>{tasks.filter((item)=>item.isCompleted===false).length} tasks left</span>
           <div className='flex gap-7 items-center'>
            <span className={`${navState === "All" && "navLinks" } text-zinc-500  font-medium text-sm`}>All task</span>
            <span className={`${navState === "Active" && "navLinks" } text-zinc-500  font-medium text-sm`}>Active</span>
            <span className={`${navState === "Completed" && "navLinks" } text-zinc-500  font-medium text-sm`}>Completed</span>
           </div>
       </div>
    </div>
  )
}

export default HeroFooter