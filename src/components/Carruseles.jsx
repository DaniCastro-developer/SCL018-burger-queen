import React from 'react';
import { Carousel } from 'flat-carousel';
import menu from '../menu/menu.json'

const Carruseles = () => {
    const data = menu.products;
      let imagenes = []
      imagenes =   data.filter(element => element.image).map(element => element.image)

    
    return (
        <>
  
    <Carousel>
        {imagenes.map((image, index) => (
            <div
                key={index}
                className="demo-item"
                style={{ backgroundImage: 'url(' + image.src + ')' }}
            />
        ))}
    </Carousel>
    </>
)
        }

export default Carruseles;
