// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Bienvenida from "./components/Bienvenida";
import Mesero from "./components/Mesero";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Roles from "./components/Roles";
import UserProvider from "./context/UserProvider";
import Kitchen from "./components/Kitchen";
import OrderReady from "./components/OrderReady";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Bienvenida />
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
          <Mesero />
          </UserProvider>
        </Route>
        
      </Switch>

      <Switch>
        <Route path="/kitchen">
          <UserProvider>
          <NavBar />
          <Kitchen/>
          </UserProvider>
        </Route>
      </Switch>

      <Switch>
        <Route path="/ready">
          <UserProvider>
          <NavBar />
          <OrderReady/>
          </UserProvider>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
