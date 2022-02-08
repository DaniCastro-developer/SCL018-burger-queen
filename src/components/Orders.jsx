import React from "react";
import { UserContext } from "../context/UserProvider";
import Chronometer from "./Chronometer";

const Orders = () => {
  const { datos, editOrder } = React.useContext(UserContext);
  
    const array1 = datos.filter(item => item.status === 'Pendiente')
    const array2 =  datos.filter(item => item.status === 'Preparando')
    const filteredRequest = array1.concat(array2);

    let orderedOrders = filteredRequest.sort((a, b) => {
      if (a.hour < b.hour) {
        return 1;
      }
      if (a.hour > b.hour) {
        return -1;
      }
      // a debe ser igual b
      return 0;
    });


  return (
    <div className="container mt-4 ">
      <h2 className="text-center"> Pedidos Pendientes </h2>
      <div className="flex flex-wrap justify-center">
      {orderedOrders.map((item, id) => (
        <div
          key={id}
          className= {
            item.status === "Pendiente"
              ? "bg-pink-300  max-w-sm rounded overflow-hidden shadow-lg mt-4 mr-4"
              : "bg-yellow-200  max-w-sm rounded overflow-hidden shadow-lg mt-4 mr-4"
          }
        >
          <div className="px-6 py-4">
          <Chronometer/>
            <div className="font-bold text-xl mb-2"> Pedido </div>
            <p className="text-gray-700 text-base"> Hora: {item.hour} </p>
            <p className="text-gray-700 text-base"> Cliente: {item.name} - Mesa: {item.table}  </p>
            <p className="text-gray-700 text-base font-bold"> Estado: {item.status} </p>
          </div>

          {
            [item.order].map((ele, e) => (
              <div key= {e}> 
              {
                ele.map((efe, f) => (
                  <div className="px-6 pt-4 " key={f}>
                  <p className="text-gray-700 text-base" > Producto: {efe.name} - cantidad: {efe.count} </p>
                  </div>
                ))
              
              }
                

              </div>
            ))
          }

          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
              onClick={() => editOrder(item.id, "listo")}
            >
              Enviar
            </button>

            <button
              className="bg-green-500 text-gray-200 rounded hover:bg-green-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
              onClick={() => editOrder(item.id, "Preparando")}
            >
              {item.status === "Preparando" ? "--" : "Preparar"}
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Orders;
