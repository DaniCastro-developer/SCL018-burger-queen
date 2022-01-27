import React from 'react';
import menu from '../menu/menu.json'


const MenuTarde = () => {
    const data = menu.products;
    const [food, setFood] = React.useState([])

    React.useEffect(()=> {
        setFood(data)
    },[])

  return <div className='container'>
      <h2 className='mt-6'> Menú</h2>
      <h1> Comida </h1>
      <div className='flex flex-wrap'>
                    {
                        food.filter(menu => menu.time === 'tarde').filter(e => e.category === 'comida').map((item, id) => (
                            <div key={id} className='mr-4'>
                            <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                               <img className="object-cover w-40 h-20" src={item.image} alt= {item.name} />
                               <div className="px-4 py-2" id={item.id}>
                                   <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">{item.name} <p className="leading-normal text-gray-700 text-base" > ${item.price} </p> </h1>
                                   
                           </div>
                       </div>
                       </div>
                ))
                    }
                    </div>

        <h1> Bebestibles </h1>
        <div className='flex flex-wrap'>
            {
                        food.filter(menu => menu.time === 'tarde').filter(element => element.category === 'bebestible').map((item, id) => (
                            <div key={id} className='mr-4'>
                            <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                               <img className="object-cover w-40 h-20" src={item.image} alt= {item.name} />
                               <div className="px-4 py-2" id={item.id}>
                                   <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">{item.name} <p className="leading-normal text-gray-700 text-base" > ${item.price} </p> </h1>
                                   
                           </div>
                       </div>
                       </div>
                ))
                    }
        </div>

        <h1 > Extras </h1>

        <div className='flex flex-wrap'>
            {
                        food.filter(menu => menu.time === 'tarde').filter(element => element.category === 'extras').map((item, id) => (
                            <div key={id} className='mr-4'>
                            <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                               <img className="object-cover w-40 h-20" src={item.image} alt= {item.name} />
                               <div className="px-4 py-2" id={item.id}>
                                   <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">{item.name} <p className="leading-normal text-gray-700 text-base" > ${item.price} </p> </h1>
                                   
                           </div>
                       </div>
                       </div>
                ))
                    }
        </div>

<h1 > Agregados </h1>
<div className='flex flex-wrap'>
            {
                        food.filter(menu => menu.time === 'tarde').filter(element => element.category === 'adicional').map((item, id) => (
                            <div key={id} className='mr-4'>
                            <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                               <img className="object-cover w-40 h-20" src={item.image} alt= {item.name} />
                               <div className="px-4 py-2" id={item.id}>
                                   <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">{item.name} <p className="leading-normal text-gray-700 text-base" > ${item.price} </p> </h1>
                                   
                           </div>
                       </div>
                       </div>
                ))
                    }
                    </div>
  </div>;
};

export default MenuTarde;
