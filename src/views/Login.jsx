import React from "react";
import { Link } from "react-router-dom";
import { app } from '../firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const auth = getAuth(app);
const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [esRegistro, setEsRegistro] = React.useState(true)

  // crear cuenta con contraseña
 const userRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('usuario creado', user)
        setEmail('')
        setPassword('')
        setError(null)
     
    })
    .catch((error) => {
      if(error.code === 'auth/admin-restricted-operation') {
        setError('Debes ingresar un correo electrónico válido');
      }
      
      if(error.code === 'auth/email-already-in-use') {
        setError('Esta cuenta ya existe');
      }
      
      // ..
      console.log(error.code);
    });
};
  const loginCount = e => {

    e.preventDefault()
    if(!email.trim() || !password.trim()){
        console.log('Datos vacíos email!')
        setError('Datos vacíos email!')
        return
    }
    if(!password.trim()){
        console.log('Datos vacíos pass!')
        setError('Datos vacíos pass!')
        return
    }
    if(password.length < 6){
        console.log('6 o más carácteres')
        setError('La contraseña debe tener como mínimo 6 caracteres')
        return
    }
    console.log('Registro exitoso')
    setError(null)

    if(esRegistro){
      userRegister(email, password)
  }

  }

  return (
    <main className="flex-col justify-center content-center">
      <h2 className="text-5xl my-10 mt-20 text-center"> Hola Bienvenides </h2>
      <h2 className= "text-pink-700 text-center mb-10"> {
        esRegistro ? 'Registrate' : 'Ingresar a mi cuenta'
    }
    </h2>
      <form onSubmit= {loginCount} className="bg-pink-100 p-5 rounded-lg">
        <div className="mb-6">
        {
                            error ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
          
          <label className="block mb-2  text-gray-900 dark:text-gray-300">
            {" "}
            Correo Electrónico{" "}
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@correo.cl"
            required
            onChange={e => setEmail(e.target.value)}
            value= {email}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2  text-gray-900 dark:text-gray-300">
            {" "}
            Cotraseña{" "}
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={e => setPassword(e.target.value)}
            value= {password}
          />
        </div>

        <div className="flex justify-center ">
        
            {" "}
            <button
              type="submit"
              className="mt-1 justify-center text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              
               {esRegistro ? 'Registrar' : 'Acceder'}
            </button>{" "}
         
        </div>
      </form>
      <p className="text-center mt-6 text-xl text-bold">
      <button 
                className="btn btn-sm text-pink-800 btn-info btn-block"
                type="button"
                onClick={() => setEsRegistro(!esRegistro)}
            >
                {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
            </button>
      </p>
    </main>
  );
};

export default Login;
