import React, { forwardRef } from 'react';
import image from './assets/result1.png';

const DefaultDisplay = forwardRef((props, ref) => {
  const { setActivepage } = props; // Destructure the setActivePage function from props

  const handleButtonClick = () => {
    
    setActivepage('InputForm');
  };

  return (
    <div className='flex flex-col justify-start mt-28 items-center h-screen w-64 sm:w-full gap-4 mx-2' ref={ref}>
      <div>
        <img className='w-20 h-20' src={image} alt="No Project" loading="lazy" />
      </div>
      <div className='font-serif font-semibold tracking-wide'>No project selected</div>
      <div className='text-gray-500 text-xs tracking-wider'>
        Select a project or Get started with one
      </div>
      <button onClick={handleButtonClick} className='bg-gray-950 text-gray-300 px-2 rounded-sm p-1'>
        Create new project
      </button>
    </div>
  );
});

export default DefaultDisplay;
