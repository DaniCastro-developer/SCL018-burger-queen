// import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 /*  Link,
  NavLink */
} from "react-router-dom";
import Bienvenida from './components/Bienvenida';
import Detalle from './components/Detalle';
import Horario from './components/Horario';
import MenuMañana from './components/MenuMañana';
import MenuTarde from './components/MenuTarde';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path= '/' exact>
          <div className='container mt-5'>
            <Bienvenida/>
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route path= '/login'>
          ... Register 
        </Route>
      </Switch>

      <Switch>
        <Route path= '/register'>
          ... Crear cuenta
        </Route>
      </Switch>

      <Switch>
        <Route path= '/time'>
         <NavBar logo = '/https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/245px-Ice_Cream_dessert_02.jpg.png'/>
          <Horario/>
          <hr/>
        </Route>
      </Switch>
      
      <Switch>
      <Route path= '/menuMañana'>
        
          <NavBar/>
          <div className='row'>
          <div className='col-8'>
          <Horario/>
          <MenuMañana/>
          {/* < Menu/> */}  
            {/* <h2> Productos en venta </h2>
            <hr/>
            <h2> Comida </h2>
            <hr/>
            <h2> Bebestibles </h2>
            <hr/>
            <h2> Extras </h2>
            <hr/>
            <h2> Opciones </h2>
            <hr/> */}
          </div>
            <div className='col-4'>
              <Detalle/>
             </div>  
          </div>

       
      </Route>
        </Switch>
        <Switch>
      <Route path= '/menuTarde'>
        
          <NavBar/>
          <div className='row'>
          <div className='col-8'>
          <Horario/>
          <MenuTarde/>
          </div>
            <div className='col-4'>
              <Detalle/>
             </div>  
          </div>

       
      </Route>
        </Switch>

    </Router>
  );
}

export default App;
