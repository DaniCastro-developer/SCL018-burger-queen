import React from 'react'
import { LoginContext } from "../context/LoginProvider";


const Reset = () => {
    const [email, setEmail] = React.useState('')
    

    const { resetPassword, error, setError} = React.useContext(LoginContext);

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        setError(null)

       resetPassword(email)

    }

  return (
      <main>
    <h2 className="text-5xl my-10 mt-15 text-center"> Recuperar contraseña </h2>
    
    <form onSubmit={procesarDatos} className="bg-pink-100 p-5 rounded-lg">
      <div className="mb-6">
        {error ? (
          <div
            className="bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error} </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
          </div>
        ) : null}

       
          <div className="mb-6">
            

        <label className="block mb-2 text-center text-gray-900 dark:text-gray-300">
          {" "}
          Correo Electrónico{" "}
        </label>

        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@correo.cl"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
     

      <div className="flex justify-center ">
        {" "}
        <button
          type="submit"
          className="mt-1 justify-center text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Recuperar
        </button>{" "}
      </div>
      </div>
    </form>


    
    </main>
  )
  
}

export default Reset