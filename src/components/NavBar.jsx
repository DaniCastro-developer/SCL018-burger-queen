import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'

const NavBar = ({fixed}) => {  
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                  <div className="w-8/12 sm:w-4/12 px-4">
                  <img src = {logo} alt='logo-silecio-bruno' className="rounded border-none"></img>
                  </div>
                <ul className="flex flex-row lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link to = {`/role`}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to = {`/`}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Salir
                    </Link>
                  </li>
                </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}


export default NavBar;
