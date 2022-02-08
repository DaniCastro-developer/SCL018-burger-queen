import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  return <main className='container mx-2 my-2'>
<h2 className="lg:text-5xl sm:text-4xl m-10 mt-20 text-center">  Crea tu cuenta </h2>
<form className="bg-pink-100 p-5 rounded-lg">
<div className="mb-6">
    <label className="block mb-2 sm:text-base lg:text-lg text-gray-900 dark:text-gray-300">
      {" "}
      Nombre{" "}
    </label>
    <input
      type="text"
      id="nameUser"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Bruno"
      required
    />
  </div>

  <div className="mb-6">
    <label className="block mb-2 text-gray-900 dark:text-gray-300">
      {" "}
      Correo Electónico{" "}
    </label>
    <input
      type="email"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@correo.cl"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-gray-900 dark:text-gray-300">
      {" "}
      Contraseña{" "}
    </label>
    <input
      type="password"
      id="password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>

  <div className="flex justify-center ">
    <Link to={`/role`}>
      {" "}
      <button
        type="submit"
        className="mt-1 justify-center text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registrarme
      </button>{" "}
    </Link>
  </div>
</form>


<p className= "mt-6 sm:text-sm md:text-base lg:text-xl text-center"> ¿Ya tienes una cuenta? <Link to = {`/login`}className='underline sm:text-sm md:text-base lg:text-xl text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out'>   Inicia sesión </Link> </p>
</main>
};

export default Registro;
