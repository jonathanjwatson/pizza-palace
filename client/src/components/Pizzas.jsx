import React, { useEffect, useState } from "react";
import axios from "axios";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios
      .get("/api/pizzas")
      .then((response) => {
        console.log(response);
        if (!response.data.error) {
          setPizzas(response.data.data);
        }else{
            alert(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {!pizzas.length ? (
        <h1>No pizzas available</h1>
      ) : (
        <>
          {pizzas.map((pizza) => (
            <h1>
              {pizza.name} - {pizza.price}
            </h1>
          ))}
        </>
      )}
      {/* <h1>
        {pizzas[0].name} - {pizzas[0].price}
      </h1> */}
    </div>
  );
};

export default Pizzas;
