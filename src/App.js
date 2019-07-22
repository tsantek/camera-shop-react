import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemsList";
import cameraAPI from "./api/camerasApi";

class App extends Component {
  state = {};

  componentDidMount = async () => {
    try {
      const response = await cameraAPI.get("/cameras");
      if (response.status === 200) {
        this.setState({
          cameras: response.data
        });
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="items-list">
            <ItemList />
          </div>
          <div className="">Cart</div>
        </div>
      </div>
    );
  }
}

export default App;
