import React from "react";
import menu from "../menu/menu.json";
import { UserContext } from "../context/UserProvider";
import Extras from "./Extras";

const MenuTarde = () => {
  const data = menu.products;
  const [food, setFood] = React.useState([]);
  const { agregarPedido } = React.useContext(UserContext);
  const [changeMenu, setChangeMenu] = React.useState("false");

  const activarMenu = (modo) => {
    setChangeMenu(modo);
  };

  React.useEffect(() => {
    setFood(data);
  }, []);

 

  return (
    <main className="container">
      <h1 className="mt-7"> Helado simple </h1>
      <div className="flex flex-wrap">
        {food
          .filter((menu) => menu.time === "tarde")
          .filter((e) => e.category === "Helado simple")
          .map((item, id) => (
            <div key={id} className="mr-4">
              <button
                onClick={() => {
                  agregarPedido(item);
                  activarMenu(true)
                }}
              >
                <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="object-cover w-40 h-20"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="px-4" id={item.id}>
                    <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">
                      {item.name}{" "}
                      <p className="leading-normal text-gray-700 text-base">
                        {" "}
                        ${item.price}{" "}
                      </p>{" "}
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>


      <h1 className="mt-7"> Helado doble </h1>
      <div className="flex flex-wrap">
        {food
          .filter((menu) => menu.time === "tarde")
          .filter((e) => e.category === "Helado doble")
          .map((item, id) => (
            <div key={id} className="mr-4">
              <button
                onClick={() => {
                  agregarPedido(item);
                  activarMenu(true)
                }}
              >
                <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="object-cover w-40 h-20"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="px-4" id={item.id}>
                    <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">
                      {item.name}{" "}
                      <p className="leading-normal text-gray-700 text-base">
                        {" "}
                        ${item.price}{" "}
                      </p>{" "}
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>

      {changeMenu ? activarMenu(false) :  <Extras/>  }

      <h1 className="mt-6"> Bebestibles </h1>
      <div className="flex flex-wrap">
        {food
          .filter((menu) => menu.time === "tarde")
          .filter((element) => element.category === "bebestible")
          .map((item, id) => (
            <div key={id} className="mr-4">
              <button
                onClick={() => {
                  agregarPedido(item);
                }}
              >
                <div className="bg-pink-100 my-3 w-40 h-35 overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="object-cover w-40 h-20"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="px-4" id={item.id}>
                    <h1 className="mb-1 text-center text-base font-semibold tracking-tight text-gray-800">
                      {item.name}{" "}
                      <p className="leading-normal text-gray-700 text-base">
                        {" "}
                        ${item.price}{" "}
                      </p>{" "}
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>

      
    </main>
  );
};

export default MenuTarde;
