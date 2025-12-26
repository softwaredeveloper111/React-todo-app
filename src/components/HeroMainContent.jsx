import React from 'react'
import Card from './Card'

const HeroMainContent = ({tasks,toggleCompletedfunc,deleteTask}) => {
  
  return (
    <div className='hero-content  w-full'>
          <div className='w-[60%] m-auto flex flex-col h-140 overflow-y-auto overflow-x-hidden gap-3 py-5'>
             {tasks.length>0?tasks.map((item)=><Card item={item} key={item.uniqueId} toggleCompletedfunc={toggleCompletedfunc} deleteTask={deleteTask}/>):<h3 className='text-zinc-400 font-medium text-lg'>No tasks is Created.</h3>}
          </div>
    </div>
  )
}

export default HeroMainContent