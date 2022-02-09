import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Orders from "../components/Orders/Orders";

const Kitchen = () => {
  return (
      <div className="flex flex-col">
        <NavBar/>
        <Orders />
      </div>
  );
};

export default Kitchen;
