import React from 'react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    updateDoc, 
    onSnapshot
  } from "firebase/firestore";
  import { db } from "../firebase.js";
 // import { nanoid } from 'nanoid'

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

// chrono
// crear estado inicial (objeto que se quede en un array[time])

const timeFormat = {
  ms:0, 
  s:0, 
  m:0, 
  h:0, 
  d:0
}
const [time, setTime] = React.useState(timeFormat)
const [interv, setInterv] = React.useState()
const [status, setStatus] = React.useState(0)



const start = () =>  {
  run();
  setStatus(1)
  setInterv(setInterval(run, 10))
}

const stop = () =>  {
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

}

var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h, updateD = time.d;

const run = () => {
  if(updateH === 24) {
    updateD++;
    updateH=0;
  }

  if(updateM === 60){
    updateH++;
    updateM= 0;
  }
  if(updateS === 60) {
    updateM++;
    updateS=0;
  }
  if(updateMs === 100) {
    updateS++;
    updateMs=0;
  }
  updateMs++;

  const array = {
    ms:updateMs, s:updateS, m:updateM, h:updateH, d:updateD
  }
  return setTime(array);
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
      setError("Recuerda registrar los datos del cliente")
      return;
    } else if (pedido.length === 0){
      console.log("El pedido está vacío");
      setError("El pedido está vacío")
      return;
    }
    // console.log(name, mesa);
    try {
        const docRef = await addDoc(collection(db, 'comanda'),{
            hour: time,
            table: cliente.table,
            name: cliente.name,
            order: pedido,
            total: total,
            status: "Pendiente"
            
        })
        
        cleanOrder()
        setError(null)
        start()
        return docRef

    } catch(error){
        console.log(error)
    }
  };

  React.useEffect(() => {
  /*   const readData = async () => {
        try {
            const q = await query(collection(db, 'comanda'));
               await  onSnapshot(q, (querySnapshot) => {
                    const order = [];
                    querySnapshot.forEach((doc) => {
                    order.push({ ...doc.data(), id: doc.id });
                    console.log(order)
                    setDatos(order)
                    
            });
        })
        } catch (error) {
            console.log(error)
        }

    }
    readData() */
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

  const deleteOrder = async (id, status) => {
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
     time, 
     setTime,
     start,
     status, 
     stop, 
     resume, 
     reset
 }


return (
<UserContext.Provider value= {totalProps}>
      {props.children}
  </UserContext.Provider>
)
};

export default UserProvider;
