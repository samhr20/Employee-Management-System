import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='bg-[#1e1e1e] min-h-screen text-white p-6 overflow-hidden'>
      <Header />
      <CreateTask />
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard
