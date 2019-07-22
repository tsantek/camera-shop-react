import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import cameraAPI from "./api/camerasApi";

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

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="items-list">
            <Main state={this.state} />
          </div>
          <div className="">Cart</div>
        </div>
      </div>
    );
  }
}

export default App;
