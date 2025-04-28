import React, { useState } from 'react';

const CreateTask = () => {
    const [tasktitle, setTaskTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const [newTask, setNewTask] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const taskData = {
            tasktitle,
            date,
            category,
            taskDesc,
            active : false ,
            newTask : true ,
            failed : false ,
            completed : false ,
        };

        setNewTask(taskData)
        const data = JSON.parse(localStorage.getItem('employee'))       

        data.forEach(function(e){
            if (assignTo.toLowerCase() === e.firstName.toLowerCase()) {
                 e.tasks.push(newTask)
                 console.log(e);            
            }
        })
        
        setTaskTitle('');
        setDate('');
        setAssignTo('');
        setCategory('');
        setTaskDesc('');
    };

    return (
        <div className="mt-10 max-w-5xl mx-auto bg-[#2c2c2c] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-center">Create Task</h2>

            <form className="flex flex-col md:flex-row gap-6 justify-between" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Task Title</label>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            value={tasktitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Date</label>
                        <input
                            type="date"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required

                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Assign To</label>
                        <input
                            type="text"
                            placeholder="Enter assignee name"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            required

                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Category</label>
                        <select
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select category</option>
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Testing">Testing</option>
                            <option value="Deployment">Deployment</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col justify-between w-full gap-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Description</label>
                        <textarea
                            rows="10"
                            placeholder="Enter task description"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            value={taskDesc}
                            onChange={(e) => setTaskDesc(e.target.value)}
                            required

                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition duration-200 w-full md:w-auto"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
