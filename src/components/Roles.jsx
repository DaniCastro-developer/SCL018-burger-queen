import React from 'react';
import { Link } from 'react-router-dom';
import kitchen from '../assets/img/chef.jpeg'
import waitress from '../assets/img/waitress.jpeg'

const Roles = () => {
  return <div>
      <h1> Selecciona tu perfil de hoy </h1>

     <Link to={`/time`}> <div class="bg-pink-100 my-3 max-w-xs overflow-hidden rounded-lg shadow-lg focus:shadow-outline"> 
                        <img class="object-cover w-full h-48" src={waitress} alt= "mesera" />
                        <div class="px-6 py-4" >
                            <h1 class="mb-2 text-xl text-center font-semibold tracking-tight text-gray-800"> Mesas </h1>
                        </div>
                    </div> </Link> 

      <Link to={`/kitchen`}><div class="bg-pink-100 my-3 max-w-xs overflow-hidden rounded-lg shadow-lg focus:shadow-outline">
        <img class="object-cover w-full h-48" src={kitchen} alt= "cocinero" />
                        <div class="px-6 py-4" >
                            <h1 class="mb-2 text-xl text-center font-semibold tracking-tight text-gray-800">Cocina</h1>
                        </div>
                    </div> </Link>
      
  </div>;
};

export default Roles;
