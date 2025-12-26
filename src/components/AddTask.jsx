import React, { useState } from 'react'

const AddTask = ({taskAddfunc}) => {


const [inputVal,setInputVal] = useState("");


function onchangeEventHandler(e){
  setInputVal(e.target.value)
}


function submitEventHandler(e){
 e.preventDefault();
 let data = {
  uniqueId:crypto.randomUUID(),
  taskContent:inputVal,
   isCompleted:false,

 }
 
 taskAddfunc(data)
 setInputVal("")

}


  return (
    <div className='w-full mt-5 mb-5'>
      <div className='w-[60%] m-auto '>
         
         <form onSubmit={submitEventHandler} className='w-full flex gap-5   '>
          <input required onChange={onchangeEventHandler} value={inputVal} className=' grow rounded-md bg-white px-3 py-3 box shadow-lg border border-zinc-200 outline-none font-medium' type="text" placeholder='Add a new task...' />
           <button type='submit'  className='addtask-btn px-5 py-2  rounded-md cursor-pointer text-white font-bold text-lg'>Add Task</button>
         </form>

      </div>
    </div>
  )
}

export default AddTask