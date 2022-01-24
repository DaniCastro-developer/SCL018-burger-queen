import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../assets/img/logo.png'

const Bienvenida = () => {
  return <div className='col text-center'>
      <img src={logo} alt=''></img>
      <h1> Hola, bienvenide. Comienza tu aventura en Silencio Bruno </h1>
     
      <Link to = {`/login`} > <button type="button" className="btn btn-outline-success mt-3"> Iniciar sesión </button> </Link>
  </div>;
};

export default Bienvenida;
