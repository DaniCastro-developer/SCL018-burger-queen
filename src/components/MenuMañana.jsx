import React from 'react';
import menu from '../menu/menu.json'


const MenuMañana = () => {
    const data = menu.products;
    const [food, setFood] = React.useState([])

    React.useEffect(()=> {
        setFood(data)
    },[])

    
  return <div>     
            <h2> Comida </h2>
                    {
                        food.filter(menu => menu.time === 'mañana').map((item, id) => (
                        <p class="mt-3 col-md-">
                    <button type= "button" className="btn btn-outline-info bt-lg" key={id}>{item.name} - ${item.price} </button>
                    </p>
                ))


                    }
  </div>;
};

export default MenuMañana;
