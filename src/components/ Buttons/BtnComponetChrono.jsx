import React from 'react';
import { UserContext } from "../../context/UserProvider";

const BtnComponetChrono = () => {
    const {start, status, stop, reset, resume } = React.useContext(UserContext)

  return <div>
      {
        (status === 0) ? 
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={start}>
            Start
        </button> : ''
      }

      {
        (status === 1) ? 
        <div>
        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={stop}>
            Stop
        </button> 
        <button className='bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={reset}>
            Reset
        </button>
        </div> : ''
      }

{
        (status === 2) ? 
        <div>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={resume}>
            Resume
        </button> 
        <button className='bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={reset}>
            Reset
        </button>
        </div> : ''
      }
      
  </div>;
};

export default BtnComponetChrono;
