import React from 'react';
import { app } from 'src/firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export const UserContext = React.createContext()
  export const auth = getAuth(app);
  //const provider = new GoogleAuthProvider(app);

const LoginProvider = (props) => {


// iniciar sesión con cuenta y contraseña
    const userLogin = (email1, password1) => {
    signInWithEmailAndPassword(auth, email1, password1)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user && user.emailVerified === true) {
          window.location.hash = '#/timeLine';
        } else {
          alert('Recuerda validar tu correo.');
          window.location.hash = '#/login';
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // console.log(errorCode + errorMessage);
        window.location.hash = '#/login';
      });
  };

    

    const totalProps = {userRegister, userLogin }

    return (
        <UserContext.Provider value= {totalProps}>
              {props.children}
          </UserContext.Provider>
        )
}

export default LoginProvider;