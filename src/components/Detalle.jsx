import React from 'react'
import Data from './Data'
import { UserContext } from '../context/UserProvider'


const Detalle = () => {
    
    const {cliente, pedido} = React.useContext(UserContext) 


    return (
        <div className='container'>
           <h2 className='mt-10'> Detalle compra </h2>
           <div id= 'detalle'>
            <p> Cliente: {cliente.name} </p>
            <p> Mesa: {cliente.table} </p>

            <h1> Productos </h1>
            {
                pedido.map(e => (
                    <li> {e.name} ${e.price} </li>
                ))
            }
            
            <Data/>
            <button className="h-18 px-5 m-2 text-pink-100 transition-colors duration-150 bg-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-800 font-bold py-2 "> Enviar pedido </button> 
            </div>
        </div>
    )
}

export default Detalle
