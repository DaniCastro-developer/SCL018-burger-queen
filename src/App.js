// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Waitress from "./views/Waitress";
import Login from "./views/Login";
import Register from "./views/Register";
import Roles from "./views/Roles";
import Kitchen from "./views/Kitchen";
import Deliveries from "./views/Deliveries";

function App() {
  return (
  
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/role" element={<Roles/>} />
          <Route path="/waitress" element={<Waitress/>} />
          <Route path="/kitchen" element={<Kitchen/>} />
          <Route path="/ready" element={<Deliveries/>} />
      </Routes>
  
  );
}

export default App;
