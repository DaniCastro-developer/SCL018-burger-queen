import React from 'react'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('');
    const [lista, setLista] = React.useState([])
    const  guardarDatos = (e) => {
        // no puede faltar si uso onSubmit
        e.preventDefault()
        if(!fruta.trim()){
            console.log('Escribe algo en fruta')
            return
        }
        if(!descripcion.trim()){
            console.log('Escribe algo en descripción')
            return
        }
        console.log('procesando datos' + fruta + descripcion)
        setLista([
            ...lista,
            {fruta: fruta, descripción: descripcion }
        ])

        e.target.reset()
        // limpiar los states
        setFruta('')
        setDescripcion('')

    }

    return (
        <div>
            <h1> Formulario </h1>
            <form onSubmit={ guardarDatos }>
                <input
                    type='text'
                    placeholder='Ingresa nombre'
                    className='form-control mb-2'
                    onChange={(e) => { 
                        setFruta(e.target.value)
                    }}
                    />

                <input
                    type='text'
                    placeholder='Ingresa descripción'
                    className='form-control mb-2'
                    onChange={(e) => {
                        setDescripcion(e.target.value)
                    }}
                    />
                <button className="btn btn-primary btn-block" type='submit'> Agregar </button>
            </form>

            <h1> Listas </h1>
            {
                lista.map((item, index) => (
                    <ul key={index}>{item.fruta} - {item.descripción} </ul>
                ))

            }
        </div>
    )
}

export default Formulario
