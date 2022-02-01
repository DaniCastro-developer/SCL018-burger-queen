import React from 'react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc
  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
  import { db } from "../firebase.js";

export const UserContext = React.createContext()

const UserProvider = (props) => {

    // objeto con nombre cliente y mesa
    const users = {
        name: '',
        table: '',
    }



const [cliente, setCliente] = React.useState(users)
const [pedido, setPedido] = React.useState([])
const [datos, setDatos] = React.useState([]);

  // eliminar un producto
  const eliminar = (dish) => {
    const newPedido = pedido.filter((item) => item.id !== dish);
    setPedido(newPedido)
 }

 // calcular el total a pagar
 const priceTotal = pedido.map(element => (element.price * element.count))
 const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const total = priceTotal.reduce(reducer, 0)
 
     //console.log(total)

 // Agregar contador a un producto (+1)

 const agregar = (id) => {
     const array = pedido.map(item => item.id === id ? {...item, count: item.count +1} : item)
     setPedido(array)
 }

 const agregarPedido = (plato) => {
    const product = {
        name: plato.name,
        price: plato.price,
        id: plato.id,
        count:1
    } 

    if(pedido.find(item => plato.id === item.id)){
     agregar(plato.id)
      return 
    }
        setPedido([...pedido, product])
  }

 const quitar = (id) => {
     const array = pedido.map(item => item.id === id ? {...item, count: item.count -1} : item)
     setPedido(array)
 }


 // FireStore

 const cleanOrder = () => {
    setPedido([])
    setCliente(users)
  }

 const agregarFire = async (e) => {
    e.preventDefault();
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    if (!cliente.name.trim() & !cliente.table.trim()) {
      console.log("Recuerda registrar los datos");
      return;
    }
    // console.log(name, mesa);
    try {
        const docRef = await addDoc(collection(db, 'comanda'),{
            hour: time,
            table: cliente.name,
            name: cliente.table,
            order: pedido,
            total: total,
            status: "Pendiente"
            
        })
        
        cleanOrder()
        return docRef

    } catch(error){
        console.log(error)
    }
  };

 /*  React.useEffect(() => {
    const readOrder = async () => {
      try {

        const q = await query(collection(db, "comanda"), orderBy('datePost', 'desc'));
        onSnapshot(q, (querySnapshot) => {
          const pedidos = [];
          querySnapshot.forEach((doc) => {
          pedidos.push({ ...doc.data(), id: doc.id });        
        }
        
      }
        catch (error) {
        console.log(error);
      }
    };

    readOrder();
    console.log("No such document!");
  }, []);  */

  // borrar una comanda

  const deleteOrder = async (id) => {
    try {
      const confirm = window.confirm('¿Quieres eliminar esta publicación?');
      if (confirm) {
        await deleteDoc(doc(db, 'comanda', id));
      }
    } catch (error) {
        console.log(error)
    }
}

 const totalProps = {
     cliente, 
     setCliente, 
     pedido, 
     setPedido, 
     quitar, 
     agregarPedido, 
     total, 
     agregarFire,
     eliminar,
     datos, 
     deleteOrder
 }


return (
<UserContext.Provider value= {totalProps}>
      {props.children}
  </UserContext.Provider>
)
};

export default UserProvider;
