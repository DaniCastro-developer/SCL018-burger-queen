import React from "react";
import { UserContext } from "../../context/UserProvider";

// confirm de entregar pedido!!

const OrderReady = () => {
  const { datos, deleteOrder, editOrder } = React.useContext(UserContext);

  //const filteredRequest = datos.filter((item) => item.status === "listo");

  const array1 = datos.filter(item => item.status === 'Listo')
  const array2 =  datos.filter(item => item.status === 'Entregado')
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
    <section className="container mt-4">
      <h2 className="text-center"> Pedidos por entregar </h2>
      <main className="flex flex-wrap">
  
      {orderedOrders.map((item, id) => (
        <div
          key={id}
          className={
              item.status === "Entregado"
                ? "bg-gray-200 max-w-xs rounded overflow-hidden shadow-lg mt-6 mr-4"
                : "bg-green-300 max-w-xs rounded overflow-hidden shadow-lg mt-6 mr-4"
            }
        >
         
         <div className="grid grid-flow-col">
          
          <div className="px-6 py-4 justify-self-start ">
            <div className="font-bold text-xl mb-2"> Pedido {item.name} </div>
            <p className="text-gray-700 text-base"> Hora: {item.hour} </p>
            <p className="text-gray-700 text-base">
              {" "}
              Mesa: {item.table}{" "}
            </p>
            <p className="text-gray-700 text-base font-bold">
              {" "}
              Estado: {item.status}{" "}
            </p>
          </div>

<div className="justify-self-end ">
          <svg
            className="w-5 h-5 m-2 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
           onClick={() => deleteOrder(item.id)}

          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          </div>
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
              onClick={() => editOrder(item.id, 'Entregado')}
            >
             {item.status === "Entregado"
                ? "--"
                : "Entregar pedido" }
            </button>

           
          </div>
        </div>
      ))}
      </main>
    </section>
  );
};

export default OrderReady;
