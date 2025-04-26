import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 '>
        <div className='bg-red-500 rounded-[11px] p-4 space-y-2'>
            <p className='font-bold text-3xl'>0</p>
            <h2 className='text-2xl'>New Task</h2>
        </div>
        <div className='bg-yellow-500 rounded-[11px] p-4 space-y-2'>
            <p className='font-bold text-3xl'>3</p>
            <h2 className='text-2xl'>Completed</h2>
        </div>
        <div className='bg-blue-500 rounded-[11px] p-4 space-y-2'>
            <p className='font-bold text-3xl'>0</p>
            <h2 className='text-2xl'>Accpeted</h2>
        </div>
        <div className='bg-green-500 rounded-[11px] p-4 space-y-2'>
            <p className='font-bold text-3xl'>1</p>
            <h2 className='text-2xl'>Failed</h2>
        </div>
       
    </div>
  )
}

export default TaskListNumbers