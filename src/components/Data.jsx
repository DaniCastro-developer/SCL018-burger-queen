import React from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { db } from "../firebase.js";

const Data = () => {
  const [datos, setDatos] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const docRef = doc(db, "comanda", "SjZgQ315SvwkcZhaZpKz");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const pedidos = []
            docSnap.forEach((doc) => {
            pedidos.push({...docSnap.data(), id: doc.id})
          })
          setDatos(pedidos);
        }
          
        } catch (error) {
        console.log(error);
      }
    };

    obtenerDatos();
    console.log("No such document!");
  }, []);



  const eliminar = async (id) => {
      try {
        const confirm = window.confirm('¿Quieres eliminar esta publicación?');
        if (confirm) {
          await deleteDoc(doc(db, 'comanda', id));
        }
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <h1>Lista del pedido</h1>
          <ul className="list-group">
            {datos.map((item) => (
              <li className="list-group-item" key={item.id}>
                {/* <p> Cliente: {item.comensal}</p> */}
                {/* <p> Mesa:  {item.mesa}</p> */}
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
                onClick={() => eliminar(item.id)}
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
