import React, { Component } from 'react';
import './App.css';
import Album from "./components/album";
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <b>Mars Image App</b>
        </div>
        <div className="App">
          <Album />
        </div>
      </div>
    );
  }
}

export default App;
