import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import Information from '../Information/Information';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import roomBg from '../Images/room-bg.jpeg'
import book1 from '../Images/book1.png'
import book2 from '../Images/book2.png'
import rancid1 from '../Images/rancid1.png'
import rancid2 from '../Images/rancid2.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {title: 'Book Saver', type: 'Collaboration', time: '20 hours', stack: 'React, HTML, CSS, Javascript, Cypress, Router', info: 'Developed a web application that uses the NY Times Bestsellers API to help you navigate the different lists effectively.', github: 'https://github.com/LordSchwifty/Book-Saver', deployed: 'https://trevorfitz0.github.io/Book-Saver/#/', image: book1 },
        {title: 'Rancid Tomatillos', type: 'Collaboration', time: '25 hours', stack: 'React, HTML, CSS, Javascript, Cypress, Router', info: 'Created a movie ratings web app that allows the user to read and view ratings of recently released flicks.', github: 'https://github.com/LordSchwifty/rancid-tomatillos', deployed: 'https://lordschwifty.github.io/rancid-tomatillos/', image: rancid2}
      ]
  }
}  

  render(){
    return (
      <div className="App">
        <main>
          <Information />
          <Intro />
          <About />
          <Projects projects={this.state.projects}/>
          <Skills />
        </main>
      </div>
    )
  };
}

export default App;
