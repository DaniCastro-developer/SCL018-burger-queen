// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Bienvenida from "./components/Bienvenida";
import Horario from "./components/Horario";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Detalle from "./components/Detalle";
import Roles from "./components/Roles";
import UserProvider from "./context/UserProvider";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="flex flex-col">
            <Bienvenida />
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route path="/login">
          <div>
            <Login />
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route path="/register">
          <Registro />
        </Route>
      </Switch>

      <Switch>
        <Route path="/role">
          <div>
            <Roles />
          </div>
        </Route>
      </Switch>
      
      <Switch>
       
        <Route path="/mesero">
        <UserProvider>
          
          <NavBar />
          <Horario />
          
          </UserProvider>
        </Route>
        
      </Switch>

      <Switch>
        <Route path="/kitchen">
          <NavBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
