import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";



const Admi = () => {
let navigate = useNavigate();

const [user, setUser] = React.useState(null)
const {

  auth
} = React.useContext(LoginContext);

  React.useEffect(() => {

    const user = auth.currentUser;
    if (user) {
      console.log("usuario logeado");
      setUser(user)
    } else {
      console.log("usuario no logeado");
      navigate('/login')
    }
  }, []);

  return <div> 
    {/* <h1 className="text-center"> Hola {user.displayName} </h1>  */}
   </div>;
};

export default Admi;
