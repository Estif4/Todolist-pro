import React, { useState } from 'react';

export default function DisplayProject({
  setActivepage,
  deleteproject,
  projectStorage,
  setProjectStorage,
  Title,
  description,
  date,
  id,
  Task,
}) {
  const [taskInput, setTaskInput] = useState('');

  // Handling task input
  function Taskinputhandler(event) {
    setTaskInput(event.target.value);
  }

  // Submit task logic
  function submittask() {
    if (taskInput.trim() === '') return; // Do not submit if empty task

    // Updating the tasks array for the specific project
    setProjectStorage((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id
          ? {
              ...project,
              tasks: project.tasks ? [...project.tasks, taskInput] : [taskInput], // Ensure tasks array exists
            }
          : project
      )
    );

    setTaskInput(''); // Clear the task input field
  }

  // Remove task logic
  function clearTask(taskToRemove) {
    setProjectStorage((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task !== taskToRemove), // Remove task
            }
          : project
      )
    );
  }

  
  const currentProject = projectStorage.find((project) => project.id === id);
  const tasks = currentProject ? currentProject.tasks || [] : [];

  return (
    <div className="flex mt-16 h-screen w-64 sm:w-full sm:justify-center">
      <div className="flex flex-col w-16 sm:w-[700px] space-y-10 p-4 rounded-lg">
        <div className="flex justify-between items-start space-x-16 mb-4">
          <div className="flex flex-col">
            <div className="font-bold text-3xl">{Title}</div>
            <div className="text-gray-500 text-sm">{date}</div>
          </div>
          <button
            onClick={() => {
              setActivepage('DefaultPage');
              deleteproject(id); 
            }}
            className="bg-slate-200 border px-2 py-1 rounded text-sm mt-2"
          >
            Delete
          </button>
        </div>

        <div className="text-sm text-gray-700 leading-relaxed break-words">
          {description}
        </div>

        <hr className="bg-black w-52 sm:w-full mt-4" />
        <div className="flex flex-col gap-2 p-4">
          <label className="text-lg font-medium">Tasks</label>
          <div className="flex flex-row items-center gap-2">
            <input
              type="text"
              value={taskInput}
              className="w-36 sm:w-[430px] h-10 bg-orange-50 border border-gray-300 rounded-md p-2 text-gray-700"
              placeholder="Enter task..."
              onChange={Taskinputhandler}
            />
            <button
              onClick={submittask} 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add 
            </button>
          </div>
          <div className="bg-yellow-50 w-48 sm:w-[500px] h-64 overflow-y-auto mr-2 p-2">
            {tasks.length > 0 ? (
              tasks.map((item, index) => (
                <div key={index} className="p-2 border-b flex flex-row justify-between">
                  <div className="break-all w-full">{item}</div> 
                  <div>
                    <button
                      onClick={() => clearTask(item)} 
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 p-2">No tasks available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
