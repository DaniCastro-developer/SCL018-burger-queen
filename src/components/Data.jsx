import React from "react";
import { UserContext } from '../context/UserProvider'


const Data = () => {
  const {datos, deleteOrder} =  React.useContext(UserContext)  

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <h1>Lista de pedidos</h1>
          <ul className="list-group">
            {datos.map((item) => (
              <li className="list-group-item" key={item.id}>
                <p> Cliente: {item.comensal}</p>
                <p> Mesa:  {item.mesa}</p>
                <div className="inline-flex">
                  <button className="bg-pink-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    -
                  </button>
                  <button className="bg-pink-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    +
                  </button>
                </div>
                {(item.cantidad)} - {item.producto}
                <button 
                className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
                onClick={() => deleteOrder(item.id)}
                >
                  borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Data;
