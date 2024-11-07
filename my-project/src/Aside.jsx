import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Sidebar({ PageSwitcher, projectStorage, projectswitcher }) {
  return (
    <aside>
      <div className="bg-gray-900 w-28 sm:w-32  md:w-96  pt-16 pr-10 rounded-md flex flex-col items-center h-screen mt-10 space-y-8">
        <div className="text-white text-l ml-4 sm:text-2xl font-bold tracking-wider">YOUR PROJECTS</div>
        <button
          className="text-gray-300 justify-center bg-gray-700 p-1 rounded-md"
          onClick={() => PageSwitcher('InputForm')}
        >
          +Add Project
        </button>
<div className='felx justify-center items-center'>
        <div className="w-full flex flex-col justify-start items-start space-y-3 mt-4  ">
          {projectStorage.map((item, index) => (
            <div
              className="break-all w-full text-gray-300 text-left tracking-wider font-serif text-l hover:text-white cursor-pointer px-2  mt-4 border border-gray border-gray-800  bg-gray-800"
              key={item.id}
              onClick={() => projectswitcher(item.id)}
            >
              {item.title}
            </div>
          ))}
        </div></div>
      </div>
    </aside>
  );
}
