import React from 'react'

const AllTasks = () => {
  return (
    <div className="mt-10">
    <h2 className="text-xl font-semibold mb-4">All Tasks</h2>

    <div className="max-h-[400px] overflow-y-auto pr-2 scroll-smooth">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div  className="bg-[#2c2c2c] p-4 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-lg font-bold mb-2">Task Title </h3>
            <p className="text-sm"><span className="font-semibold">Date:</span> 2025-04-25</p>
            <p className="text-sm"><span className="font-semibold">Assigned To:</span> Name </p>
            <p className="text-sm"><span className="font-semibold">Admin:</span> Shubham Saini</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default AllTasks