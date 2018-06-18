import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Slider/>
      </div>
    );
  }
}

export default App;
