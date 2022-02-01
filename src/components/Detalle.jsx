import React from 'react'
import Data from './Data'
import { UserContext } from '../context/UserProvider'


const Detalle = () => {
    
    const {cliente, pedido, setPedido} = React.useContext(UserContext) 
    

    // eliminar un producto
    const eliminar = (dish) => {
       const newPedido = pedido.filter((item) => item.id !== dish);
       setPedido(newPedido)
    }

    // calcular el total a pagar
    const priceTotal = pedido.map(element => (element.price * element.count))
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
     const total = priceTotal.reduce(reducer, 0)
    
    console.log(total)

    // Agregar contador a un producto (+1)

    const agregar = (id) => {
        const array = pedido.map(item => item.id === id ? {...item, count: item.count +1} : item)
        setPedido(array)
    }

    const quitar = (id) => {
        const array = pedido.map(item => item.id === id ? {...item, count: item.count -1} : item)
        setPedido(array)
    }

    return (
        <div className='container'>
           <h2 className='mt-10'> Detalle compra </h2>
           <div id= 'detalle'>
            <p> Cliente: {cliente.name} </p>
            <p> Mesa: {cliente.table} </p>

            <h1> Productos </h1>
            {
                
                pedido.map((e, id) => (
                    <div key={id}>
                    <li> {e.count} {e.name} ${e.price} </li>
                    <div className="inline-flex">
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
                        className="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1 my-1 btn-sm text-xs"
                        onClick={() => eliminar(e.id)}
                    >
                        borrar
                    </button>
                    </div>
                    
                ))
            }
            

            <h1> Total a pagar </h1>
            $ {total}
            
            <Data/>
            <button className="h-18 px-5 m-2 text-pink-100 transition-colors duration-150 bg-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-800 font-bold py-2 "> Enviar pedido </button> 
            </div>
        </div>
    )
}

export default Detalle
