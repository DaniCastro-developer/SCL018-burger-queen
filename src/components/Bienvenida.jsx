import React from 'react';
import { Link } from 'react-router-dom';
import logopink  from '../assets/img/logopink.png'

const Bienvenida = () => {
  return (
     <main className=' flex flex-col items-center content-center'>
      <div>
      <img id= 'log' src={logopink} alt='logo silencio Bruno' className='mx-auto mt-12'></img>
      </div>
      <div id= 'btn-enter'>
      <Link to = {`/login`} > <button 
      className="h-18 py-5 px-9 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-800 text-lg font-bold"> Iniciar sesión </button></Link>
      </div>
  </main>
  )
};

export default Bienvenida;
