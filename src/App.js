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
import Login from './components/Login'
import Registro from './components/Registro'
import Roles from './components/Roles'
import Carrusel from './components/Carrusel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path= '/' exact>
          <div>
            <Bienvenida/>
           {/*  <Carrusel/> */}
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route path= '/login'>
          <div>
          <Login/>
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route path= '/register'>
          <Registro/>
        </Route>
      </Switch>

      <Switch>
        <Route path= '/role' exact>
          <div>
            <Roles/>
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route path= '/time'>
         <NavBar />
          <Horario/>
          <hr/>
        </Route>
      </Switch>
      
      <Switch>
      <Route path= '/menuMañana'>
        
          <NavBar/>
          <Horario/>
          <div className='flex flex-row'>
          <MenuMañana/>

              <Detalle/>
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
          

          <Switch>
      <Route path= '/kitchen'>
        
          <NavBar/>
      </Route>
        </Switch>

    </Router>
  );
}

export default App;
