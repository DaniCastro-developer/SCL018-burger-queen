import React from 'react'
import auth from '../views/Login'
//import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom';



const Admi = () => {
   /*  let navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState(null)
    React.useEffect(() => {
         const user = auth.currentUser;

        // obtener información del usuario
        if(user && user.emailVerified === true){
            console.log('existe usuario')
            // setError o setEsRegistro
            setUserInfo(auth.currentUser)
        } else {
            console.log('no existe usuario')
            navigate('/login')
        }
    }, [navigate]) */

// const [firebaseUser, setFirebaseUser] = React.useState(false)

/* React.useEffect(() => {
    const authChanged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(user, uid)
        setFirebaseUser(user)
        // ...
      } else {
        // User is signed out
        console.log('user is signed out');
        setFirebaseUser(null)
      }
    
    });
  }
  }, []) */

  return (
    <div> Ruta protegida </div>
  )
}

export default Admi