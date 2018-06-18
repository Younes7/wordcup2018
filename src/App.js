import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Slider from './components/Slider';
import Tournament from './components/Tournament';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <div className="jumbotron pt-0 bg-transparent">
        <Slider/>
        </div>
        <Tournament/>
      </div>
    );
  }
}

export default App;
