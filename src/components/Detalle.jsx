import React from 'react'
import { UserContext } from '../context/UserProvider'


const Detalle = () => {
    
    const {cliente, pedido, eliminar, agregar, total, quitar, agregarFire} = React.useContext(UserContext) 
    

    return (
        <form action="" onSubmit={agregarFire}>
        <div className='container flex flex-col '>
             
            
                <h2> Detalle compra </h2>
                <div className='bg-pink-500 mt-3 px-3 py-3 rounded-lg'>
          
           <div id= 'detalle' >
            <p 
            className='mt-2'

            > Cliente: {cliente.name} </p>
            <p> Mesa: {cliente.table} </p>

            <h1> Productos </h1>
            {
                
                pedido.map((e, id) => (
                    <div key={id} className='mt-3'>
                    <li> {e.count} {e.name} ${e.price} </li>
                    <div className="inline-flex mt-1">
                  <button 
                  className="bg-pink-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
                  onClick={() => quitar(e.id)}>
                    -
                  </button>
                  <button 
                  className="bg-pink-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  onClick={() => agregar(e.id)}>
                    +
                  </button>
                </div>
                    <button 
                        className="bg-pink-200 text-pink-600 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
                        onClick={() => eliminar(e.id)}
                    >
                        borrar
                    </button>
                    </div>
                    
                ))
            }
            
            <div>
            <h1 > Total a pagar </h1>
            <p > $ {total} </p> 
            </div>
            
            
            <button 
            className="h-18 px-5 m-2 text-pink-100 transition-colors duration-150 bg-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-800 font-bold py-2 aling-center mt-3"
            > Enviar pedido </button> 
            </div>
            </div>
            
        </div>
        </form>
    )
}

export default Detalle
