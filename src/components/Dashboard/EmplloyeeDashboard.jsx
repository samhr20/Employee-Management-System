import React from 'react'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'
import Header from '../others/Header'

const EmplloyeeDashboard = () => {
  return (
    <div className='bg-[#1e1e1e] h-screen text-white p-10   '>
         <Header/>
          <TaskListNumbers/>
          <TaskList/>
    </div>
  )
}

export default EmplloyeeDashboard