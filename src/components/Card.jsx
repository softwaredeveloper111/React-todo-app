import React from 'react'
import { IoTrashOutline } from "react-icons/io5";

const Card = ({item,toggleCompletedfunc,deleteTask}) => {
  let  { uniqueId, taskContent, isCompleted} = item;


  function clickEventHandler(){
   
     toggleCompletedfunc(uniqueId)
  }


  function deleteEventHandler(){
    deleteTask(uniqueId)
  }

  return (
    <div className='w-full pb-3 border-b border-zinc-300 flex items-center justify-between px-3'>
         <div className='flex gap-2 items-baseline '>
          <input onChange={()=> clickEventHandler()} checked={isCompleted} type="checkbox"  className='accent-green-400 cursor-pointer h-3.75 w-3.75'/>
         <span className={`max-w-150 font-medium text-lg ${isCompleted&&"line-through text-zinc-400 "}`}>{taskContent}</span>
         </div>
         <span>
         {isCompleted ?  <IoTrashOutline onClick={deleteEventHandler} size={"1.4em"} color={"#817f7f"} className="cursor-pointer"/> :<button onClick={deleteEventHandler} className='px-3 py-2 bg-red-500 text-white font-medium cursor-pointer rounded-md'>delete</button>  } 
         </span>
    </div>
  )
}

export default Card



