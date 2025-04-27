import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
  const newTasks = data.tasks.filter((task) => task.newTask);
  const activeTasks = data.tasks.filter((task) => task.active && !task.newTask); // <-- yeh correct
  const completedTasks = data.tasks.filter((task) => task.completed);
  const failedTasks = data.tasks.filter((task) => task.failed);

  return (
    <div id="taskList" className="flex flex-nowrap overflow-x-auto gap-7 items-center justify-start h-[58%] w-full mt-10">

      {newTasks.map((task, index) => (
        <React.Fragment key={`new-${index}`}>
          <NewTask task={task} />
        </React.Fragment>
      ))}
      
      {activeTasks.map((task, index) => (
        <React.Fragment key={`active-${index}`}>
          <AcceptTask task={task} />
        </React.Fragment>
      ))}
      
      {completedTasks.map((task, index) => (
        <React.Fragment key={`completed-${index}`}>
          <CompleteTask task={task} />
        </React.Fragment>
      ))}
      
      {failedTasks.map((task, index) => (
        <React.Fragment key={`failed-${index}`}>
          <FailedTask task={task} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default TaskList
