import React from "react";
import { UserContext } from "../../context/UserProvider";


const ModalConfirm = () => {
  
  const { modalActive, agregarFire, setModalActive} = React.useContext(UserContext)

   const overlay = document.querySelector('#overlay')
  
  const changeModal = () => {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('flex')
    setModalActive(false)
  };

  return (
    <div className= {modalActive ? "bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center" : "bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center" } id= 'overlay'>
      <div className="bg-white max-w-sm py-4 px-5 rounded shadow-xl text-gray-800">
        <div className="flex justify-end p-2">
          
          <svg
          id= 'close-modal'
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={changeModal}

          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="mt-2 text-sm">
          <svg
            className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="mb-5 text-center text-lg font-normal text-gray-500 dark:text-gray-400">¿El pedido está listo para enviar a cocina?</p>
        </div>
        
        <div className="mt-3 flex justify-end space-x-3">
          <button 
          onClick={changeModal}
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">
            {" "}
            Cancelar
          </button>

          <button 
          onClick={agregarFire}
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
            {" "}
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
