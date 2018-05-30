import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.date = {
      title: 'Whats my age again',
      year: 0,
      month: 0,
      day: 0
    }


    this.updateDateYear = this.updateDateYear.bind(this);


  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Whats My Age Again?</h1>
        </header>
        <p className="App-intro">
        <h2>enter birth Year</h2>
          <input type="text" placeholder="Birth Year" value={this.date.year}></input>
          <br></br>
          <button>Submit</button>


        <h3>result</h3>
        </p>
      </div>
    );
  }
}

export default App;
