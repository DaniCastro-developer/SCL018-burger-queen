import React from "react";
import Detalle from "./Detalle";

import MenuMañana from "./MenuMañana.jsx";
import MenuTarde from "./MenuTarde.jsx";
import { UserContext } from "../context/UserProvider";

const Mesero = () => {
  const { cliente, setCliente } = React.useContext(UserContext);

  const [changeMenu, setChangeMenu] = React.useState("false");

  const activarMenu = (modo) => {
    setChangeMenu(modo);
  };

  return (
    <section className="ml-6 flex flex-col justify-center">
      <main className="grid md:grid-cols-5 xl:grid-cols-2 my-6">
        <div className="container md:col-span-3 xl:col-span-1 flex flex-row ">
          <div className="container flex flex-col">
            <div>
              <h2 className="md:text-4xl mt-6"> Menú</h2>
            </div>
            <div>
              <button
                className="h-10 w-40  m-2 md:h-10 md:w-25 xl:w-30 md:text-base text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"
                onClick={() => activarMenu(true)}
              >
                mañana
              </button>
              <button
                className="h-10 w-40 m-2 md:h-10 md:w-25 md:text-base text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"
                onClick={() => activarMenu(false)}
              >
                Tarde
              </button>
            </div>
          </div>
        </div>

        {/*  datos cliente */}
        <div className="flex flex-row items-center md:col-span-2 xl:col-span-1 ">
          <div className="flex flex-col">
            <div>
              <h2 className="mt-6 md:text-4xl "> Datos cliente</h2>
            </div>
            <div className="flex flex-row ">
             
              <input
                type="text"
                name="name"
                className="border-1 form-control m-3 p-2 md:h-10 md:w-28 sm:w-15 md:text-sm border-pink-500 rounded text-gray-500"
                placeholder="Nombre cliente"
                value={cliente.name}
                onChange={(e) =>
                  setCliente({ ...cliente, name: e.target.value })
                }
              />

         
              <input
                type="number"
                className="form-control m-3 p-2 md:h-10 md:w-20 md:text-sm rounded text-gray-500"
                placeholder="Nº de mesa md:text-sm"
                value={cliente.table}
                onChange={(e) =>
                  setCliente({ ...cliente, table: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Seleccionar menú mañana/tarde  */}
      </main>

      {/* Menú y detalle pedido */}
      <main className="grid md:grid-cols-5 xl:grid-cols-2 ml-4">
        {changeMenu ? <MenuMañana /> : <MenuTarde />}

        <Detalle />
      </main>
    </section>
  );
};

export default Mesero;
