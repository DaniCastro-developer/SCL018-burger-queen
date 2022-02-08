import React from "react";
import { UserContext } from "../context/UserProvider";
import BtnComponetChrono from "./BtnComponetChrono";


const Chronometer = () => {
    const {time } = React.useContext(UserContext)
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <h1 className="text-center"> Tiempo del pedido </h1>
        </div>
        <div className="flex flex-row text-center m-3">
          <section >
            <p className="text-black"> {(time.d >= 10) ? time.d : '0' + time.d} </p>
            <p>
              <small className="text-black"> Days </small>{" "}
            </p>
          </section>
          <span> : </span>

          <section>
            <p className="text-black"> {(time.h >= 10) ? time.h : '0' + time.h} </p>
            <p>
              <small className="text-black"> Hours </small>{" "}
            </p>
          </section>
          <span> : </span>

          <section>
            <p className="text-black"> {(time.m >= 10) ? time.m : '0' + time.m} </p>
            <p>
              <small className="text-black"> Minutes </small>{" "}
            </p>
          </section>
          <span> : </span>

          <section>
            <p className="text-black"> {(time.s >= 10) ? time.s : '0' + time.s} </p>
            <p>
              <small className="text-black"> Seconds </small>{" "}
            </p>
          </section>
        </div>
      </section>
      <BtnComponetChrono/>
    </section>
  );
};

export default Chronometer;
