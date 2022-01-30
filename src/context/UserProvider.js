import React from 'react';

export const UserContext = React.createContext()

const UserProvider = (props) => {

    const users = {
        name: 'Nombre',
        table: 0,
    }

const [cliente, setCliente] = React.useState(users)


return (
<UserContext.Provider value= {{cliente, setCliente}}>
      {props.children}
  </UserContext.Provider>
)
};

export default UserProvider;
