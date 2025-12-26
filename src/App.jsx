import React, { useState } from 'react'
import Header from './components/Header'
import Divider from './components/Divider'
import AddTask from './components/AddTask'
import Hero from './components/Hero'

const App = () => {



const [navState,setNavState] = useState("All")


const [tasks, setTasks] = useState([])


function toggleCompletedfunc(Id){


  
  setTasks((prev)=>prev.map((item)=>item.uniqueId === Id ? {...item,isCompleted:!item.isCompleted}: item))
} 


function deleteTask(Id){
  setTasks((prev)=>prev.filter((item)=>item.uniqueId!==Id))
}


function taskAddfunc(task){
  setTasks((prev)=>[...prev,task])
}


function changeNavState(states){
  setNavState(states)
  
}


function clearCompletedTask(){
  if(tasks.length>0){

    setTasks((prev)=>prev.filter(item=>item.isCompleted===false))
  }
  
}


  return (
    <div className='w-full h-screen bg-white'>
        <Header/>
        <Divider/>
        <AddTask taskAddfunc={taskAddfunc}/>
        <Divider/>
        <Hero clearCompletedTask={clearCompletedTask} navState={navState}  tasks={tasks} toggleCompletedfunc={toggleCompletedfunc} deleteTask={deleteTask} changeNavState={changeNavState}/>
    </div>
  )
}

export default App