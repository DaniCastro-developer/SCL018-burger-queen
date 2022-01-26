import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  return <div className='container mx-auto'>
    <h2 className= "text-4xl text-center"> Crea tu cuenta </h2>

  <form >
    <div className="form-group">
      <input type="text" id="createName" className="w-9\/12 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" placeholder="Nombre de usuario"/>
     </div>
     <div className="form-group">
      <input type="email" id="mailRegister" className="w-9\/12 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"  placeholder="correo@ejemplo.com" pattern="^\\S+@\\S+\\.\\S+$" required/>
      </div>
    <div className="form-group">

      <input type="password" id="passwordRegister" className="w-9\/12 h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" placeholder="contraseña" />
     </div>
      
     <div className="col text-center">
      <button id = "btnRegister" type="button" className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"> Registrar </button>
  
     <p className= "info mt-3"> ¿Ya tienes una cuenta? <Link to = {`/login`}> Inicia sesión </Link> </p>
     </div>
     </form>
     </div>
};

export default Registro;
