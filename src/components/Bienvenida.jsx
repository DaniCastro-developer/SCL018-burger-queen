import React from 'react';
import { Link } from 'react-router-dom';
import logopink  from '../assets/img/logopink.png'

const Bienvenida = () => {
  return (
     <main className=' mt-20'>
      <div className='flex justify-center'>
      <img id= 'log' src={logopink} alt='logo silencio Bruno' className=' mt-12 ms:w-9/12 md:w-9/12 md:h-9/12'></img>
      </div>
      <div id= 'btn-enter' className='flex justify-center space-x-10'>
      <Link to = {`/login`} > <button 
      className= "md:py-5 md:px-9 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-800 sm:text-sm md:text-2xl font-bold mx-auto"> Iniciar sesión </button></Link>
      </div>
  </main>
  )
};

export default Bienvenida;
