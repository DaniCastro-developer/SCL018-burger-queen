
import React from "react";
import { UserContext } from "../../context/UserProvider";
import ModalSendOrder from "../Alerts/ModalSendOrder";

const Detalle = () => {
  const {
    cliente,
    pedido,
    eliminar,
    agregar,
    total,
    quitar,
    OpenModal,
    resetOrder, 
  } = React.useContext(UserContext);

  return (
    <aside className=" flex flex-col mt-6 mr-4">
      <h2 className="md:text-4xl mt-2"> Detalle compra </h2>
      <div className="bg-pink-500 mt-3 px-4 py-5 md:w-full rounded-lg">
        <div className="grid md:grid-cols-2 xl:col-span-1">
        <div id="detalle" className="justify-self-start">
          <p className="mt-2"> Cliente: {cliente.name} </p>
          <p> Mesa: {cliente.table} </p>
          </div>
          <div className="justify-self-end">
        <button
        type="button" 
        className=" text-pink-500 bg-pink-100 hover:bg-pink-200 focus:ring-4 border-2 border-pink-500 focus:ring-pink-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={resetOrder}
        > x </button>
          </div>
          </div>

          <h1 className="md:text-base"> Productos </h1>
          {pedido.map((e, id) => (
            <div key={id} className="mt-3">
              <li>
                {" "}
                {e.count} {e.name} ${e.price}{" "}
              </li>
              <div className="inline-flex mt-1">
                <button
                  className="bg-pink-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  onClick={() => quitar(e.id)}
                >
                  -
                </button>
                <button
                  className="bg-pink-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  onClick={() => agregar(e.id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-pink-200 text-pink-600 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
                onClick={() => eliminar(e.id)}
              >
                borrar
              </button>
            </div>
          ))}

          <div>
            <h1 className="md:text-base"> Total a pagar </h1>
            <p> $ {total} </p>
          </div>

          <button
            className="h-18 px-5 m-2 md:text-base text-pink-100 transition-colors duration-150 bg-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-800 font-bold py-2 aling-center mt-3"
            onClick={OpenModal}
          >
            {" "}
            Enviar pedido{" "}
          </button>
        </div>
        <ModalSendOrder/>
  
      
    </aside>
  );
};

export default Detalle;
