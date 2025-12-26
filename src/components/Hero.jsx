import React from 'react'
import HeroHeader from './HeroHeader'
import HeroMainContent from './HeroMainContent'
import HeroFooter from './HeroFooter'
import ActivePage from "./ActivePage";
import CompletedPage from './CompletedPage';

const Hero = ({navState,tasks,toggleCompletedfunc,deleteTask,changeNavState,clearCompletedTask}) => {

  let activeTask = tasks.filter((item)=>item.isCompleted===false);
  let completedTask = tasks.filter((item)=>item.isCompleted===true);

 

  return (
    <div className='w-full'>
       <HeroHeader clearCompletedTask={clearCompletedTask} navState={navState} changeNavState={changeNavState}/>
       {navState==="All" && <HeroMainContent tasks={tasks} toggleCompletedfunc={toggleCompletedfunc} deleteTask={deleteTask}/>}
       {navState==="Active" && < ActivePage activeTask={activeTask} toggleCompletedfunc={toggleCompletedfunc} deleteTask={deleteTask}/>}
       {navState==="Completed" &&  <CompletedPage completedTasks={completedTask} toggleCompletedfunc={toggleCompletedfunc} deleteTask={deleteTask}/>}
       
       <HeroFooter tasks={tasks} navState={navState}/>
    </div>
  )
}

export default Hero