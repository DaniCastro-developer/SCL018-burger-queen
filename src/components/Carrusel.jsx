import React from 'react';
import menu from '../menu/menu.json'

const Carrusel = () => {
    const data = menu.products;

    
      let imagenes = []
      imagenes =   data.filter(element => element.image).map(element => element.image)
  
  return (
    
    <div className="flex">

    <div className="w-1/3 ">
      <img
        src= {imagenes[0]}
        className="w-full "
        alt="imágen del menú: café"
      />
    </div>
    <div className="w-1/3">
      <img
        src={imagenes[3]}
        className="w-full"
        alt="imágen del menú: churros"
      />
    </div>
    <div className="w-1/3">
      <img
        src={imagenes[5]}
        className="w-full"
        alt="imágen del menú: helado"
      />
    </div>
  </div>
  

    );

}

export default Carrusel;
