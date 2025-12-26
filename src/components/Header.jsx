import React from 'react'

const Header = () => {
  return (
    <div className='w-full pt-6 pb-3 flex justify-end px-10 '>
        <div className='w-1/2 flex items-center justify-between'>
         <h2 className='font-semibold text-2xl opacity-[.9]'>Task Manager</h2>
         <div className='flex gap-2 items-center'>
          <span className='h-4 w-4 bg-zinc-400 rounded-full'></span>
          <span className='h-4 w-4 bg-zinc-400 rounded-full'></span>
          <span className='h-4 w-4 bg-zinc-400 rounded-full'></span>
         </div>
        </div>
    </div>
  )
}

export default Header