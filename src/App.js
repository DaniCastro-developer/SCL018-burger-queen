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
import Data from './components/Data'

function App() {
  return (
    <Router>
      <Switch>
        <Route path= '/' exact>
          <div className='flex flex-col'> 
            <Bienvenida/>
            <Data/> 
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
          <Horario/>
          <div className='flex flex-row'>
          <MenuTarde/>
              <Detalle/> 
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
