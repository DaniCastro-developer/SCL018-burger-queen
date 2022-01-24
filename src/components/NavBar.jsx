import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'

const NavBar = (props) => {
  return <div className= "d-flex justify-content-around">
      <img className="mr-3" width="100" height="150" src={logo} alt="logo-heladería"/>
      <h1> Welcome to Silencio Bruno </h1>
     <p> <Link to = {`/`} > <button type="button" className="btn btn-outline-danger"> Salir </button> </Link> </p>
  </div>;
};

export default NavBar;
