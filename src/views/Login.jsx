import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="flex-col justify-center content-center">
      <h2 className="text-5xl my-10 mt-20 text-center"> Hola Bienvenides </h2>
      <form className="bg-pink-100 p-5 rounded-lg">
        <div className="mb-6">
          <label className="block mb-2  text-gray-900 dark:text-gray-300">
            {" "}
            Correo Electrónico{" "}
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
          <label className="block mb-2  text-gray-900 dark:text-gray-300">
            {" "}
            Cotraseña{" "}
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
              className="mt-1 justify-center text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comenzar
            </button>{" "}
          </Link>
        </div>
      </form>
      <p className="text-center mt-6 text-xl text-bold">
        {" "}
        No tienes cuenta aún{" "}
        <Link
          to={`/register`}
          className="underline text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out sm:text-sm md:text-base"
        >
          {" "}
          Registrate{" "}
        </Link>{" "}
      </p>
    </main>
  );
};

export default Login;
