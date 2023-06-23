import { data } from '../../Assets/data';
import React, { Component } from 'react';
import './Projects.css';
import roomBg from '../Images/room-bg.jpeg'

class Projects extends Component {
    constructor() {
      super();
      this.state = {
        projDisplay:''
    }
  }  
    render(){
      return (
        <div className='project-section'>
            <section className='details'>
                <section className='details-1'></section>
                   <h3 className='title-1'>{data[1].title}</h3>
                <section className='details-2'></section>
            </section>
            <section className='display-section'>
                <div className='display'></div>
            </section>
        </div>
      )
    };
  }

  export default Projects;