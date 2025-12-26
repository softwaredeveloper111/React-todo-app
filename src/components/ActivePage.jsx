import React from 'react'
import Card from "./Card";

const Active = ({activeTask,toggleCompletedfunc,deleteTask}) => {

  return (
    <div className='active-page h-full '>

      <div className='w-[60%] m-auto flex flex-col h-140 overflow-y-auto overflow-x-hidden gap-3 py-5'>

          {activeTask.length>0?activeTask.map((item)=><Card item={item} key={item.uniqueId} toggleCompletedfunc={toggleCompletedfunc} deleteTask={deleteTask}/>):<h3 className='text-zinc-400 font-medium text-lg'>No Active tasks is Created.</h3>}

          

      </div>

    </div>
  )
}

export default Active