import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import Information from '../Information/Information';
import About from '../About/About';
import Skills from '../Skills/Skills';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {title: 'Book Saver', type: 'Collaboration', time: '20 hours', stack: 'React, HTML, CSS, Javascript, Cypress, Router', info: 'Developed a web application that uses the NY Times Bestsellers API to help you navigate the different lists effectively.', github: 'https://github.com/LordSchwifty/Book-Saver', deployed: 'https://trevorfitz0.github.io/Book-Saver/#/' },
        {title: 'Rancid Tomatillos', type: 'Collaboration', time: '25 hours', stack: 'React, HTML, CSS, Javascript, Cypress, Router', info: 'Created a movie ratings web app that allows the user to read and view ratings of recently released flicks.', github: 'https://github.com/LordSchwifty/rancid-tomatillos', deployed: 'https://lordschwifty.github.io/rancid-tomatillos/' }
      ]
  }

  render(){
    return (
      <div className="App">
        <main>
          <Information />
          <Intro />
          <About />
          <Skills />
        </main>
      </div>
    )
  }
}

export default App;
