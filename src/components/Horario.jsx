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
            <h2> Nombre comensal </h2>
            <h2> Mesa </h2>
            <div class="relative inline-block w-full text-gray-700">
            <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                <option>A regular sized select input</option>
                <option>Another option</option>
                <option>And one more</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            </div>

            <h2> Selecciona el menú </h2>
            <Link to={`/menuMañana`}> <button className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600"> Mañana </button> </Link> 
            <Link to={`/menuTarde`}><button className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg focus:shadow-outline hover:bg-pink-600" > Tarde </button> </Link>
                
        </div>
    )
}

export default Horario
