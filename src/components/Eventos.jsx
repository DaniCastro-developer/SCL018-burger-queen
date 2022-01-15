import React, {useState} from 'react'

const Eventos = () => {
    // valor por defecto del estado
    const [texto, setTexto] = useState('Texto desde estado');

    const eventClick = (name) => {
        console.log('Me diste un click ' + name );
        // se llama la función para cambiar estado
        setTexto('Cambiando el texto');
    }

    return (
        <>
            <hr/>
            <h2> {texto} </h2>
            <button onClick={() => eventClick('Daniela')}> click </button>
        </>
    )
}

export default Eventos
