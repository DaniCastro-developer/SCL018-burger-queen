import React from 'react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    updateDoc, 
    onSnapshot,
  } from "firebase/firestore"

  import { db } from "../firebase.js";
 // import { nanoid } from 'nanoid'
 import moment from 'moment'
import 'moment/locale/es' // Pasar a español

export const UserContext = React.createContext()

const UserProvider = (props) => {
    // objeto con nombre cliente y mesa
    const users = {
        name: '',
        table: ''
    }

const [cliente, setCliente] = React.useState(users)
const [pedido, setPedido] = React.useState([])
const [datos, setDatos] = React.useState([]);
const [stateOrder, setStateOrder] = React.useState(false)
const [error, setError] = React.useState(null)
const [modalActive, setModalActive] = React.useState(false)
const [idAction, setIdAction] = React.useState()
  

//const [confirm, setConfirm] = React.useState(false)

// chrono
// crear estado inicial (objeto que se quede en un array[time])

/* const timeFormat = {
  ms:0, 
  s:0, 
  m:0, 
  h:0, 
  d:0
} */
/* const [time, setTime] = React.useState(timeFormat) */
const [status, setStatus] = React.useState(0)



/* const start = () =>  {
  setStatus(1)
  setInterv(setInterval(run, 10))
} */

/* const stop = () =>  {
   clearInterval(interv)
  setStatus(2);
}

const resume = () =>  {
 start()
}

const reset = () =>  {
  clearInterval(interv)
  setStatus(0);
  setTime(timeFormat)

} */



// ------------- Modal ---------------

 /* const overlay = document.querySelector('#overlay')
  
  const changeModal = () => {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('flex')
  }; */


  const OpenModal = () => {
    if(modalActive === false){
      setModalActive(true)}
    else {
      setModalActive(false)
    }
  }

  // Borrar pedido (cliente se arrepiente)

  const resetOrder = () => {
    cleanOrder()
  }

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


 //----------------------- FireStore ------------------

 const cleanOrder = () => {
    setPedido([])
    setCliente(users)
  }

  // enviar pediddo a cocina - doc se agrega a Firebase



 const agregarFire = async (e) => {
    e.preventDefault();
    const date = new Date();
    const time = moment(date).format('h:mm a');
    const day = moment(date).format('D-MMM-YY');
    if (!cliente.name.trim() & !cliente.table.trim()) {
      //console.log("Recuerda registrar los datos");
      setError("Recuerda registrar los datos del cliente")
      return;
    } else if (pedido.length === 0){
     // console.log("El pedido está vacío");
      setError("El pedido está vacío")
      return;
      
    }
    // console.log(name, mesa);
    try {
        const docRef = await addDoc(collection(db, 'comanda'),{
            hour: time,
            day: day,
            date: date,
            table: cliente.table,
            name: cliente.name,
            order: pedido,
            total: total,
            status: "Pendiente"
            
        })
    
        cleanOrder()
        setError(null)
        //start()
        setModalActive(false)
        return docRef

    } catch(error){
        console.log(error)
    }
  }; 

 

React.useEffect(() => {
    onSnapshot(
      collection(db, "comanda"),
      (snapshot) => {
        const orders = snapshot.docs.map((order) => {
          return { ...order.data(), id: order.id };
        })
        //console.log(orders)
        setDatos(orders);
      }
    )

}, [])

  // borrar una comanda

  const deleteOrder = async (id) => {
    try {
      const confirm = window.confirm('¿Quieres eliminar este pedido?');
      if (confirm) {
        await deleteDoc(doc(db, 'comanda', id));
      }
    } catch (error) {
        console.log(error)
    }
} 

// editar un documento

const editOrder = async (id, status) => {
  setStateOrder(true)
  try {
    const collectionRef = doc(db, 'comanda', id);
  await updateDoc(collectionRef, {
    status: status
  });
    
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
     agregar,
     deleteOrder,
     editOrder,
     stateOrder, 
     error, 
     idAction,
     status, 
     resetOrder,
     modalActive,
     setModalActive,
     OpenModal
 }


return (
<UserContext.Provider value= {totalProps}>
      {props.children}
  </UserContext.Provider>
)
};

export default UserProvider;
