import React from 'react';
import menu from '../menu/menu.json'


const MenuMañana = () => {
    const data = menu.products;
    const [food, setFood] = React.useState([])

    React.useEffect(()=> {
        setFood(data)
    },[])

    
  return <div className='container'>     

            <h2 className='mt-5'> Comida </h2>
            
                    {
                        food.filter(menu => menu.time === 'mañana').filter(element => element.category === 'comida').map((item, id) => (
                    <div key={id} className='flex flex-row'>
                         <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                            <img className="object-cover w-40 h-20" src={item.image} alt= {item.name} />
                            <div className="px-4 py-2" id={item.id}>
                                <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">{item.name} <p className="leading-normal text-gray-700 text-base" > ${item.price} </p> </h1>
                                
                        </div>
                    </div>
                    </div>
                
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
