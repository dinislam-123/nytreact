import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Nyt from "./components/Nyt";

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
           <p className="App-intro">{this.state.response}</p>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  */}
        <Nyt/>
      </div>
    );
  }
}

export default App;
