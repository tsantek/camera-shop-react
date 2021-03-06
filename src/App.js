import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import cameraAPI from "./api/camerasApi";
import Cart from "./components/Cart";

class App extends Component {
  state = {
    cameras: [],
    isLoading: true
  };

  componentDidMount = async () => {
    cameraAPI
      .get("/cameras")
      .then(response => {
        setTimeout(() => {
          this.setState(prevState => {
            return {
              ...prevState,
              cameras: response.data,
              isLoading: false
            };
          });
        }, 1000);
      })
      .catch(e => console.log(e));
  };

  handleAddToCart = id => {
    const cartItem = this.state.cameras.filter(camera => camera.id === id);
    cameraAPI
      .patch(`/cameras/${id}`, { ...cartItem[0], inCart: true })
      .then(res =>
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
        })
      )
      .catch(e => console.log(e));
  };

  handleRemoveToCart = id => {
    const cartItem = this.state.cameras.filter(camera => camera.id === id);
    cameraAPI
      .patch(`/cameras/${id}`, { ...cartItem[0], inCart: false })
      .then(res =>
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
        })
      )
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <div className="loader">
            <span style={{ paddingTop: "20%" }}>
              <Loader type="Puff" color="#00BFFF" height="100" width="100" />
            </span>
          </div>
        ) : (
          <>
            <Header />
            <div className="container">
              <div className="items-list">
                <Main state={this.state} addToCart={this.handleAddToCart} />
              </div>
              <div className="cart">
                <Cart
                  state={this.state}
                  removeFromCart={this.handleRemoveToCart}
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
