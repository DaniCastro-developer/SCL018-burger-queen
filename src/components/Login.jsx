import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return <div className='container text-center'>
      <h1> Hola Bienvenides </h1>
      <small> Inicia sesión para comenzar con los pedidos </small>


  <form>
     <div className="form-group">
      <input type="email" id="mailRegister" className="form-control mt-4"  placeholder="correo@ejemplo.com" pattern="^\\S+@\\S+\\.\\S+$" required/>
      </div>
    <div className="form-group">

      <input type="password" id="passwordRegister" className="form-control mt-3"  placeholder="contraseña" />
     </div>
      
    
     </form>
     <div>
      <Link to = {`/time`} > <button type="button" className="btn btn-outline-success mt-4"> Comenzar </button> </Link>
    <p className='mt-3'> No tienes cuenta aún <Link to = {`/register`} >  Registrate </Link> </p>
     </div>

  </div>;
};

export default Login;
