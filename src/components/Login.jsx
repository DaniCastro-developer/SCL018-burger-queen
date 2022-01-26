import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return <div className='flex-col justify-center'>
      <h1 className='text-4xl text-center' > Hola Bienvenides </h1>

     <div className='flex justify-center'>
      <input type="email" id="mailRegister" className="w-9\/12 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"  placeholder="correo@ejemplo.com" pattern="^\\S+@\\S+\\.\\S+$" required/>
      </div>
    
      <div className='flex justify-center'>
      <input type="password" id="passwordRegister" className="w-9\/12 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" placeholder="contraseña" />
     </div>
      
     <div className='flex justify-center '>
      <Link to = {`/time`} > <button type="button" className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"> Comenzar </button> </Link>
      </div>
      
      <p className = "text-center"> No tienes cuenta aún <Link to = {`/register`} className="underline text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out">  Registrate </Link> </p>
     

  </div>;
};

export default Login;
