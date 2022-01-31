import React from 'react';

export const UserContext = React.createContext()

const UserProvider = (props) => {

    // objeto con nombre cliente y mesa
    const users = {
        name: 'Nombre',
        table: 0,
    }



const [cliente, setCliente] = React.useState(users)
const [pedido, setPedido] = React.useState([])


return (
<UserContext.Provider value= {{cliente, setCliente, pedido, setPedido}}>
      {props.children}
  </UserContext.Provider>
)
};

export default UserProvider;
