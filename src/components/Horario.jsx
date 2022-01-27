import React from 'react'
import {
    collection,
    addDoc,
    onSnapshot,
  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
  import { db } from "../firebase.js";
import Input from "@material-tailwind/react/Input";


import { Link } from 'react-router-dom';
//import { nanoid } from 'nanoid'


const Horario = () => {
    
    const [dato, setDato] = React.useState('')

    const agregar = async (e)=> {
        e.preventDefault()
    if(!dato.trim()){
        console.log('Recuerda registrar los datos')
        return
    }
    console.log(dato)
    }

    return (
        <div>
            <h2 className='mt-5'> Datos cliente</h2>
            <div className='flex'>
            <div className="w-64 m-2 mt-3">
            <h1> Nombre comensal </h1>
        <form onSubmit={agregar}>
            <input
               type="text"
               className='form-control mb-2'
               placeholder="Nombre cliente"
               value = {dato}
               onChange = {e => setDato(e.target.value)}
               
        />
        <button 
            className='btn btn-dark btn-block btn-sm'
            > Agregar mesa </button>
        </form>

        
        </div>
        
            
            <div className="w-24 m-2 mt-3">
            <h1> Mesa </h1>
            <Input
                        type="number"
                        min="1"
                        max="15"
                        name="table"
                        color="teal"
                        outline={true}
                        size ="sm"
                        placeholder=""
                    />
                </div>
               
            </div>
            

            <h2 className="mt-6">  Selecciona el menú </h2>
            <Link to={`/menuMañana`}> <button className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"> Mañana </button> </Link> 
            <Link to={`/menuTarde`}><button className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600" > Tarde </button> </Link>
                
        </div>
        
    )
}

export default Horario
