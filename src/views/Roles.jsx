import React from "react";
import { Link } from "react-router-dom";
import kitchen from "../assets/img/chef.jpeg";
import waitress from "../assets/img/waitress.jpeg";
import Navbar from "../components/Navbar/NavBar";
import Admi from "../components/Admi";

const Roles = () => {
  return (
    <div className="cotainer">
      <Navbar />
      <Admi/>

      <section className="container mt-4">
        <main>
          <h2 className="text-center text-4xl md:text-4xl mt-12 sm:text-2xl">
            {" "}
            Selecciona tu perfil de hoy{" "}
          </h2>
          <div className="flex justify-center">
            <Link to={`/waitress`}>
              {" "}
              <div className="mx-6 bg-pink-100 my-3 max-w-xs overflow-hidden rounded-lg shadow-lg focus:shadow-outline">
                <img
                  className="object-cover w-full h-48"
                  src={waitress}
                  alt="mesera"
                />
                <div className="px-6 py-4">
                  <h1 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-800">
                    {" "}
                    Mesas{" "}
                  </h1>
                </div>
              </div>{" "}
            </Link>

            <Link to={`/kitchen`}>
              <div className="bg-pink-100 my-3 max-w-xs overflow-hidden rounded-lg shadow-lg focus:shadow-outline">
                <img
                  className="object-cover w-full h-48"
                  src={kitchen}
                  alt="cocinero"
                />
                <div className="px-6 py-4">
                  <h1 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-800">
                    Cocina
                  </h1>
                </div>
              </div>{" "}
            </Link>
          </div>
        </main>
        ;
      </section>
    </div>
  );
};

export default Roles;
