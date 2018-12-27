import './App.css';

import React, { Component } from 'react';

import FluidFragment from "./components/fluid-fragment/FluidFragmentContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FluidFragment />
      </div>
    );
  }
}

export default App;
