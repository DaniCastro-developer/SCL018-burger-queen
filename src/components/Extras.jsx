import React from "react";
import menu from "../menu/menu.json";
import { UserContext } from "../context/UserProvider";

const Extras = () => {
  const data = menu.products;
  const [food, setFood] = React.useState([]);
  const { agregarPedido } = React.useContext(UserContext);

  React.useEffect(() => {
    setFood(data);
  }, []);

  return (
    <article>
      <h1 className="mt-6"> Extras </h1>
      <div className="flex flex-wrap">
        {food
          .filter((menu) => menu.time === "tarde")
          .filter((element) => element.category === "extras")
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

      <h1 className="mt-6"> Agregados </h1>
      <div className="flex flex-wrap">
        {food
          .filter((menu) => menu.time === "tarde")
          .filter((element) => element.category === "adicional")
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
    </article>
  );
};

export default Extras;
