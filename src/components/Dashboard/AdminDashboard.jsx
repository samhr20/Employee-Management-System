import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='bg-[#1e1e1e] min-h-screen text-white p-6 overflow-hidden'>
      <div className='flex justify-between items-center '>
        <p className='text-2xl font-bold'>Hello<br /> <span className='ml-3.5 text-yellow-400 text-3xl'>Shubham👋</span></p>
        <button className='p-2 px-3 rounded-sm bg-red-500 font-bold '>Log out</button>
      </div>
      <CreateTask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard
