import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import cameraAPI from "./api/camerasApi";
import Cart from "./components/Cart";

class App extends Component {
  state = {
    cameras: []
  };

  componentDidMount = async () => {
    try {
      const response = await cameraAPI.get("/cameras");
      if (response.status === 200) {
        this.setState(prevState => {
          return {
            ...prevState,
            cameras: response.data
          };
        });
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleAddToCart = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        cameras: this.state.cameras.map(camera => {
          if (camera.id === id) {
            return {
              ...camera,
              inCart: true
            };
          } else {
            return camera;
          }
        })
      };
    });
  };

  handleRemoveToCart = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        cameras: this.state.cameras.map(camera => {
          if (camera.id === id) {
            return {
              ...camera,
              inCart: false
            };
          } else {
            return camera;
          }
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="items-list">
            <Main state={this.state} addToCart={this.handleAddToCart} />
          </div>
          <div className="cart">
            <Cart state={this.state} removeFromCart={this.handleRemoveToCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
