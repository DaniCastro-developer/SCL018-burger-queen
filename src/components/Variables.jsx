// ra para obtener estructura de componentes 

import React from 'react'

const Variables = () => {
    const saludo = 'Hola hola coca-cola';
    const imagen = 'https://www.dibujoskawaii.pet/wp-content/uploads/2020/06/perro-salchicha-kawaii.jpg'
    return (
        <div>
            <h2> Nuevo componente {saludo} </h2>
            <img src={imagen} alt='imagen de un perrito tierno'/>
            
        </div>
    )
}

export default Variables
