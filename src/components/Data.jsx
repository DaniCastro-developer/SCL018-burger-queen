import React from "react";
import {
  collection,
  query,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { db } from "../firebase.js";

const Data = () => {
  const [datos, setDatos] = React.useState([]);
  

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const q = query(collection(db, "comanda"));
        await onSnapshot(q, (querySnapshot) => {
          const pedidos = [];
          querySnapshot.forEach((doc) => {
            pedidos.push({ ...doc.data(), id: doc.id });
          });

          setDatos(pedidos);
        });
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  console.log(datos);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <h1>Lista del pedido</h1>
          {
          datos.map((item) => (
              
            <p className="list-group-item" key={item.id}>
              {item.producto}
            </p>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Data;
