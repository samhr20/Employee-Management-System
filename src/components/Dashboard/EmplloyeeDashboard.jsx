import React from 'react'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'
import Header from '../others/Header'

const EmplloyeeDashboard = ({data}) => {
  return (
    <div className='bg-[#1e1e1e] h-screen text-white p-10   '>
         <Header data={data}/>
          <TaskListNumbers data={data}/>
          <TaskList data={data}/>
    </div>
  )
}

export default EmplloyeeDashboard