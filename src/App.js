// import './App.css';
import React from 'react'
import Detalle from './components/Detalle';
import Menu from './components/Menu';

function App() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'> Hola buenos días </h1>
      <hr/>
      <div className='row'>
        <div className='col-8'>
        < Menu/>
        </div>
      <div className='col-4'>
        <Detalle/>
      </div>
       
      </div>    

    </div>
  );
}

export default App;
