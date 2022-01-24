import React from 'react'
import menu from '../menu/menu.json'
import { Link } from 'react-router-dom';
//import { nanoid } from 'nanoid'


const Horario = () => {
    const data = menu.products;
    const [products, setProducts] = React.useState([]);
    const [food, setFood] = React.useState([])

    React.useEffect(()=> {
       setProducts(data)
        setFood(data)
    },[])

    const openMenu = (select) => {
        if (select === 'desayuno'){
        const desayuno = data.filter((p)=> p.time === 'mañana');
        const comida = desayuno.filter((p)=> p.category === 'comida');
        setProducts(desayuno)
        setFood(comida)
        
    } else if(select === 'tarde') {
        const tarde = data.filter((p)=> p.time === 'tarde');
        const comida = tarde.filter((p)=> p.category === 'comida');
        setProducts(tarde)
        setFood(comida)
    } else {
        console.log('error')
    }
    }


     
    return (
        <div>
            <h2> Selecciona el menú </h2>
            <Link to={`/menuMañana`}> <button className="btn btn-outline-success btn-block mx-2 active"> Mañana </button> </Link> 
            <Link to={`/menuTarde`}><button className="btn btn-outline-success btn-block active" > Tarde </button> </Link>
                
        </div>
    )
}

export default Horario
