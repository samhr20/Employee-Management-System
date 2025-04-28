import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {

   const {employees} = useContext(AuthContext)   

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">All Tasks</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#2c2c2c] rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Employee Name</th>
              <th className="py-3 px-6 text-left">New Task</th>
              <th className="py-3 px-6 text-left">Active</th>
              <th className="py-3 px-6 text-left">Completed</th>
              <th className="py-3 px-6 text-left">Failed</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {employees.map((e)=>(
              <tr key={e.id} className="border-b border-gray-600 hover:bg-gray-800">
              <td className="py-3 px-6">{e.firstName}</td>
              <td className="py-3 px-6">{e.taskNumbers.newTask}</td>
              <td className="py-3 px-6">{e.taskNumbers.active}</td>
              <td className="py-3 px-6">{e.taskNumbers.completed}</td>
              <td className="py-3 px-6">{e.taskNumbers.failed}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTasks;
