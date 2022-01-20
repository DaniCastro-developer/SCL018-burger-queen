import React from 'react';

const NavBar = (props) => {
  return <div>
      <h1> Welcome to Silencio Bruno </h1>
      <img className="mr-3" src={props.logo} alt=""/>
  </div>;
};

export default NavBar;
