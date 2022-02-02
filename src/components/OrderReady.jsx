import React from "react";
import { UserContext } from "../context/UserProvider";

// confirm de entregar pedido!!

const OrderReady = () => {
  const { datos, deleteOrder } = React.useContext(UserContext);

  const filteredRequest = datos.filter((item) => item.status === "listo");

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
    <div className="container mt-4">
      <h2 className="text-center"> Pedidos por entregar </h2>
      <div className="flex flex-wrap">
  
      {orderedOrders.map((item, id) => (
        <div
          key={id}
          className={
               "bg-green-300 max-w-sm rounded overflow-hidden shadow-lg mt-6 mr-4"
          }
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> Pedido </div>
            <p className="text-gray-700 text-base"> Hora: {item.hour} </p>
            <p className="text-gray-700 text-base">
              {" "}
              Cliente: {item.name} - Mesa: {item.table}{" "}
            </p>
            <p className="text-gray-700 text-base font-bold">
              {" "}
              Estado: {item.status}{" "}
            </p>
          </div>

          {[item.order].map((ele, e) => (
            <div key={e}>
              {ele.map((efe, f) => (
                <div className="px-6 pt-4 " key={f}>
                  <p className="text-gray-700 text-base">
                    {" "}
                    Producto: {efe.name} - cantidad: {efe.count}{" "}
                  </p>
                </div>
              ))}
            </div>
          ))}

          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
              onClick={() => deleteOrder(item.id, "listo")}
            >
             Entregar pedido
            </button>

           
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OrderReady;
