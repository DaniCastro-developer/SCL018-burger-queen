import React from 'react'
import menu from '../menu/menu.json'
import { useParams } from 'react-router-dom'
import Data from './Data'

const Detalle = () => {
    const {id} = useParams();
    const data = menu.products;


    const [product, setProduct] = React.useState({})

    React.useEffect(()=> {
            setProduct(data)
         },[])
     


    return (
        <div className='container'>
           <h2 className='mt-10'> Detalle compra </h2>
           <div id= 'detalle'>
            <Data/>
            <button className="h-18 px-5 m-2 text-pink-100 transition-colors duration-150 bg-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-800 font-bold py-2 "> Enviar pedido </button> 
            </div>
        </div>
    )
}

export default Detalle
