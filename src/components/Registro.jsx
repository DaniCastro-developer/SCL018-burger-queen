import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  return <div className='container'>
    <h1> Crea tu cuenta </h1>

  <form>
    <div className="form-group">
      <input type="text" id="createName" className="form-control mt-4" placeholder="Nombre de usuario"/>
     </div>
     <div className="form-group">
      <input type="email" id="mailRegister" className="form-control mt-3"  placeholder="correo@ejemplo.com" pattern="^\\S+@\\S+\\.\\S+$" required/>
      </div>
    <div className="form-group">

      <input type="password" id="passwordRegister" className="form-control mt-3"  placeholder="contraseña" />
     </div>
      
     <div className="col text-center">
      <button id = "btnRegister" type="button" className="btn btn-outline-success mt-4 "> Registrar </button>
  
     <p className= "info mt-3"> ¿Ya tienes una cuenta? <Link to = {`/login`}> Inicia sesión </Link> </p>
     </div>
     </form>
     </div>
};

export default Registro;
