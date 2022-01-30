import React from "react";
/* import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { db } from "../firebase.js"; */
import Detalle from './Detalle'

import MenuMañana from "./MenuMañana.jsx";
import MenuTarde from "./MenuTarde.jsx";
//import { nanoid } from 'nanoid'
import { UserContext } from "../context/UserProvider";


const Horario = () => {
  const {cliente, setCliente} = React.useContext(UserContext)
 

  const [changeMenu, setChangeMenu] = React.useState('false');

  const activarMenu = (modo) => {
    setChangeMenu(modo)
  }

/*   const agregar = async (e) => {
    e.preventDefault();
    if (!name.trim() & !mesa.trim()) {
      console.log("Recuerda registrar los datos");
      return;
    }
    // console.log(name, mesa);
    try {
        const docRef = await addDoc(collection(db, 'comanda'),{
            mesa: mesa,
            name: name,
            fecha: Date.now()
        })
        setMesa('')
        setName('')
        return docRef

    } catch(error){
        console.log(error)
    }
  }; */

  return (
    <div className="cotainer flex flex-row">
        <div >
      <h2 className="mt-5"> Datos cliente</h2>
      <div className="flex flex-row">
        <div className="w-64 m-2">
          <form className="flex">

            <h1> Nombre comensal </h1>
            <input
              type="text"
              name="name"
              className="form-control m-3"
              placeholder="Nombre cliente"
              value={cliente.name}
              onChange={(e) => setCliente({...cliente, name: e.target.value})}
            />

            <h1> Mesa </h1>
            <input
              type="number"
              className="form-control m-3"
              placeholder="Número de mesa"
              value={cliente.table}
              onChange={(e) => setCliente({...cliente, table:e.target.value})}
            />
          </form>
        </div>
      </div>



<div className="container flex flex-row">
  <div>
<h2 className='mt-6'> Menú</h2>
        <button 
        className="h-10 w-40 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"
        onClick={()=> activarMenu(true)}
        >
          mañana
        </button>
        <button className="h-10 w-40 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"
        onClick={()=> activarMenu(false)}
        >
          Tarde
        </button>
       
        

      {
          changeMenu ? <MenuMañana/> : <MenuTarde/>
      }
      </div>
      
      
      <div>
      <Detalle/>
      </div>
      </div>
      </div>
   
     
      </div>

  );
};

export default Horario;
