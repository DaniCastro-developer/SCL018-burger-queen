import React from 'react'
import menu from '../menu/menu.json'
import { useParams } from 'react-router-dom'

const Detalle = () => {
    const {id} = useParams();
    const data = menu.products;


    const [product, setProduct] = React.useState({})

    React.useEffect(()=> {
            setProduct(data)
         },[])
     


    return (
        <div>
           <h2> Detalle compra </h2>
            {/*  {
                product.map((item, id) => {
                    <li key= {id}> {item.name} - ${item.price} </li>
                })
            } */}
            <button className="btn btn-dark btn-block"> Enviar pedido </button> 

        </div>
    )
}

export default Detalle
