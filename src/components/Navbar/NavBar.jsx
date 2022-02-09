import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import delivery from '../../assets/iconos/delivery.png'
import user from '../../assets/iconos/user.png'
import out from '../../assets/iconos/out.png'


const NavBar = () => {  
  return (
    <header className="container flex flex-wrap py-2">
      
        <div className="w-full px-2 justify-center">
          <nav className="relative flex md:flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded-xl">
            <div className="container px-4 mx-auto flex lg:flex-wrap items-center justify-between">
                  <div className="w-8/12 sm:w-4/12 px-4">
                  <img src = {logo} alt='logo-silecio-bruno' className=" lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-44 sm:h-44 rounded border-none"></img>
                  </div>
                <ul className="flex flex-row lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <Link to = {`/ready`}
                      className="px-3 py-2 flex items-center ms:text-xs md:text-xs lg:text-m uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Pedidos Listos
                      <img src = {delivery} alt='delivery' className="w-6 h-6 m-2 rounded border-none"></img>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to = {`/role`}
                      className="px-4 py-2 flex items-center md:text-xs   ms:text-xs lg:text-m uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Roles
                      <img src = {user} alt='user' className="w-6 h-6 rounded border-none m-2"></img>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to = {`/`}
                      className="px-4 py-2 flex items-center ms:text-xs md:text-xs lg:text-m uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Salir
                      <img src = {out} alt='out' className="w-6 h-6 rounded border-none m-2"></img>
                    </Link>
                  </li>
                </ul>
            </div>
          </nav>
        </div>

    </header>
  );
}


export default NavBar;
