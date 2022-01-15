import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0)

   /*  const aumentar = () => {
        console.log('click')
        setContador(contador +1)

    } */

    return (
        <div>
            <h2> Contador </h2>
            <h3> Nuestro número aumentando {contador} </h3>
            <h4>
                {
                    // evaluar ? exito : negativa (operador ternario)
                    contador > 35 ? 'Es mayor a 35' : 'Es menor que 35'
                }
            </h4>
            <button onClick={() => setContador(contador + 5)}>aumenta</button>
        </div>
    )
}

export default Contador
