import React from 'react'

const Listas = () => {

    const estadoInicial = [
        {id:1, texto: 'tarea 1'},
        {id:2, texto: 'tarea 2'},
        {id:3, texto: 'tarea 3'},
        ]

    const [lista, setLista] = React.useState(estadoInicial)

   /*  const array1 = ['Chile', 'Argentina'];
    const array2 = ['Perú', 'Bolivia']; */

    // const unidos = [...array1, ...array2]

    const agregarElemento = () => {
        console.log('click')
        setLista([
            // operador de propagación
            ...lista,
            {id:4, texto: 'tarea 4'},
        ])
    }

    return (
        <div>
            <h1> Listas </h1>
            {
                lista.map((item) => (
                    <h4 key={item.id}>{item.texto} </h4>
                ))

            }
                <button onClick={() => agregarElemento()}> Agregar </button>

        </div>
    )
}

export default Listas
