import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pizzas from "./components/Pizzas";
import PizzaForm from "./components/PizzaForm";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Pizzas />
      <PizzaForm />
    </div>
  );
}

export default App;
