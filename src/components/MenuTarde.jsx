import React from 'react';
import menu from '../menu/menu.json'


const MenuTarde = () => {
    const data = menu.products;
    const [food, setFood] = React.useState([])

    React.useEffect(()=> {
        setFood(data)
    },[])

  return <div>
      <h2 className='mt-5'> Comida </h2>
                    {
                        food.filter(menu => menu.time === 'tarde').filter(e => e.category === 'comida').map((item, id) => (
                        <p className="mt-3 col-md-" key={id}>
                    <button type= "button" className="btn btn-outline-success bt-lg" id={item.id}>{item.name} - ${item.price} </button>
                    </p>
                ))
                    }

        <h2 className='mt-5'> Bebestibles </h2>
            {
                        food.filter(menu => menu.time === 'tarde').filter(element => element.category === 'bebestible').map((item, id) => (
                        <p className="mt-3 col-md-" key = {id}>
                    <button type= "button" className="btn btn-outline-success bt-lg" id={item.id}>{item.name} - ${item.price} </button>
                    </p>
                ))
                    }


        <h2 className='mt-5'> Extras </h2>
            {
                        food.filter(menu => menu.time === 'tarde').filter(element => element.category === 'extras').map((item, id) => (
                        <p className="mt-3 col-md-" key = {id}>
                    <button type= "button" className="btn btn-outline-success bt-lg" id={item.id}>{item.name} - ${item.price} </button>
                    </p>
                ))
                    }

<h2 className='mt-5'> Agregados </h2>
            {
                        food.filter(menu => menu.time === 'tarde').filter(element => element.category === 'adicional').map((item, id) => (
                        <p className="mt-3 col-md-" key = {id}>
                    <button type= "button" className="btn btn-outline-success bt-lg" id={item.id}>{item.name} - ${item.price} </button>
                    </p>
                ))
                    }
  </div>;
};

export default MenuTarde;
