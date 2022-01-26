import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/img/logo.png'

const Bienvenida = () => {
  return <div className='flex flex-col'>
    <div>
      <img src={logo} alt=''></img>
      </div>
      <div>
      <h1> Hola, bienvenide. Comienza tu aventura en Silencio Bruno </h1>
      </div>
      <Link to = {`/login`} > <button className="h-18 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-800 font-bold py-2 "> Iniciar sesión </button></Link>
  </div>;
};

export default Bienvenida;
