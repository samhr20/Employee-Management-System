import React from 'react'

const CreateTask = () => {
    return (
        <div className="mt-10 max-w-5xl mx-auto bg-[#2c2c2c] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-center">Create Task</h2>

            <form className="flex flex-col md:flex-row gap-6 justify-between">
                {/* Left Side */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Task Title</label>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Date</label>
                        <input
                            type="date"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Assign To</label>
                        <input
                            type="text"
                            placeholder="Enter assignee name"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Category</label>
                        <select className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white">
                            <option value="">Select category</option>
                            <option>Development</option>
                            <option>Design</option>
                            <option>Testing</option>
                            <option>Deployment</option>
                        </select>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-between  w-full gap-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Description</label>
                        <textarea
                            rows="10"
                            placeholder="Enter task description"
                            className="w-full p-2 rounded-md bg-[#3a3a3a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition duration-200  w-full md:w-auto"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask