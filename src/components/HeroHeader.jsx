import React from 'react'

const HeroHeader = ({navState,changeNavState,clearCompletedTask}) => {
  
  function clickEventHandler(sts){
    changeNavState(sts)
  }

  function clearCompletdTskedEvent(){
    clearCompletedTask()
  }
 
  return (
    <div className='hero-header w-full bg-zinc-100 flex justify-end border-b border-zinc-300 border-t '>
        <div className='w-[60%] py-5  flex items-center justify-between m-auto'>
            <div className='flex items-center gap-11'>


              <span onClick={
                ()=>clickEventHandler("All")
               } className={`${navState === "All" && "navLinks" } cursor-pointer text-zinc-600 font-semibold text-[17px]`}>All task</span>

              <span onClick={
                ()=>clickEventHandler("Active")
                } className={`${navState === "Active" && "navLinks"}  cursor-pointer text-zinc-600 font-semibold text-[17px]`}>Active</span>


              <span onClick={
                ()=>clickEventHandler("Completed")
                } className={`${navState === "Completed" && "navLinks"}  cursor-pointer text-zinc-600 font-semibold text-[17px]`}>Completed</span>

            </div>
            <button onClick={clearCompletdTskedEvent} className='border  border-zinc-400 px-3 py-2 rounded-md bg-zinc-200 cursor-pointer'>Clear Completed</button>
        </div>
    </div>
  )
}

export default HeroHeader