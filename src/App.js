// import './App.css';
import React from 'react'
/* import Parrafo from './components/Parrafo.jsx'
import Variables from './components/Variables.jsx';
import Eventos from './components/Eventos.jsx';*/
//import Contador from './components/Contador.jsx';
import Formulario from './components/Formulario.jsx';
import Listas from './components/Listas.jsx';

function App() {
  return (
    <div className='container mt-5'>
      <h1> Hola cochino </h1>
      {/* < Parrafo />
      < Variables/>
      <Eventos/>
      <Contador/> */}
      <Listas/>
      <Formulario/>
    </div>
  );
}

export default App;
