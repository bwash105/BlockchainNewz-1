import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/header';
import Navibar from './components/navbar';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

                <img src={logo} className="App-logo" alt="logo" />

        <Navibar />

        <h1>OKAY</h1>

        <Header />
        <h2>BlockchainNewz</h2>


      </div>
    );
  }
}

export default App;
