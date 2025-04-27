import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className='h-full shrink-0 bg-red-500 w-[380px] rounded-xl'>
    <div className='flex justify-between items-center p-3'>
        <h1 className='bg-red-600 rounded-xl px-5 font-bold p-2'>{task.category}</h1>
        <p className='font-bold text-white'>{task.date}</p>
    </div>
    <div className='mt-2 px-4 overflow-x-auto'>
        <h1 className='text-xl font-bold'>{task.taskTitle}</h1>
        <p className='mt-2.5'>{task.taskDesc}</p>
    </div>
    <div className='flex justify-between items-center p-3'>
        <button className='bg-green-500 px-3 p-2 rounded-sm  shadow-black shadow-sm'>Accept</button>
    </div>
</div>
  )
}

export default NewTask