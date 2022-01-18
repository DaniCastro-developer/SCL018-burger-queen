import React from 'react'
import menu from '../menu/menu.json'
//import { nanoid } from 'nanoid'


const Menu = () => {
    const data = menu.products;
    const [products, setProducts] = React.useState([]);

    React.useEffect(()=> {
        setProducts(data)
    },[])

    const openMenu = (select) => {
        if (select === 'desayuno'){
        const desayuno = products.filter((p)=> p.time === 'mañana');
        setProducts(desayuno)
        
    } else if(select === 'tarde') {
        const tarde = products.filter((p)=> p.time === 'tarde');
        setProducts(tarde)
    } else {
        console.log('error')
    }
    }
     
    return (
        <div>
            <h2> Selecciona el menú </h2>
            <button className="btn btn-primary btn-block mx-2" onClick={()=> openMenu('desayuno')}> Mañana </button>
            <button className="btn btn-primary btn-block" onClick={()=> openMenu('tarde')}> Tarde </button>
            
            {
                products.map((item, index) => (
                    <ul key={index}>{item.name} - ${item.id} </ul>
                ))

            }
        </div>
    )
}

export default Menu
