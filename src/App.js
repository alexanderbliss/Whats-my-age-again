import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Whats My Age Again?</h1>
        </header>
        <p className="App-intro">
        <h2>enter birth Year</h2>
        <input placeholder="Birth Year"></input>

          <h2>enter birth month</h2>
          <input placeholder="Birth Month"></input>

          <h2>enter birth dat</h2>
          <input placeholder="Birth day (numerical)"></input>
          <br></br>
          <button>Submit</button>


        <h3>result</h3>
        </p>
      </div>
    );
  }
}

export default App;
