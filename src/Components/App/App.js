import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import Information from '../Information/Information';

class App extends Component {
  constructor() {
    super();
    this.state = ''
  }

  render(){
    return (
      <div className="App">
        <main>
          <Intro />
          <Information />
        </main>
      </div>
    )
  }
}

export default App;
