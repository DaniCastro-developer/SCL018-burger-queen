import React from 'react';
import menu from '../menu/menu.json'


const MenuMañana = () => {
    const data = menu.products;
    const [food, setFood] = React.useState([])

    React.useEffect(()=> {
        setFood(data)
    },[])

    
  return <div>     
            <h2 className='mt-5'> Comida </h2>
                    {
                        food.filter(menu => menu.time === 'mañana').filter(element => element.category === 'comida').map((item, id) => (
                        <p key={id} className="mt-3 col-md-">
                    <button type= "button" className="btn btn-outline-success bt-lg" id={item.id}>{item.name} - ${item.price} </button>
                    </p>
                ))
                    }
            <h2 className='mt-5'> Bebestibles </h2>
            {
                        food.filter(menu => menu.time === 'mañana').filter(element => element.category === 'bebestible').map((item, id) => (
                        <p key={id} className="mt-3 col-md-">
                    <button type= "button" className="btn btn-outline-success bt-lg" id={item.id}>{item.name} - ${item.price} </button>
                    </p>
                ))
                    }
            
  </div>;
};

export default MenuMañana;
