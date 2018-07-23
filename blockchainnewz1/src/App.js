import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/header';
import Navibar from './components/navbar';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar />
        <img src={logo} className="App-logo" alt="logo" />

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.google.com">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
        </nav>
        <Header />
        <h2>BlockchainNewz</h2>


      </div>
    );
  }
}

export default App;
