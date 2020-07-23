import React, { Component } from "react";
import axios from "axios";

class PizzaForm extends Component {
  state = {
    name: "",
    price: "$",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.price);
    if (this.state.name.length > 0 && this.state.price.length > 0) {
      // MAKE AN API CALL
      axios
        .post("/api/pizzas", { name: this.state.name, price: this.state.price })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter a valid name and price.");
    }
  };

  render() {
    return (
      <div>
        <h3>Add a new pizza</h3>
        {/* Controlled Input! */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Pizza name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Pizza price"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button>Add new pizza</button>
        </form>
      </div>
    );
  }
}

export default PizzaForm;
