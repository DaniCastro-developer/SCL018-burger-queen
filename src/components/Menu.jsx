import React from 'react'
import menu from '../menu/menu.json'
//import { nanoid } from 'nanoid'


const Menu = () => {

    const openMenu = () => {
        console.log(menu)
    }
    
    return (
        <div>
            <h2> Selecciona el menú </h2>
            <button className="btn btn-primary btn-block mx-2" onClick={()=> openMenu()}> Mañana </button>
            <button className="btn btn-primary btn-block"> Tarde </button>
            
        </div>
    )
}

export default Menu
