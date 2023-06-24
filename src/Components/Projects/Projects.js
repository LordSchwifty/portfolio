import { data } from '../../Assets/data';
import React, { Component } from 'react';
import './Projects.css';
import roomBg from '../Images/room-bg.jpeg'
import Card from '../Card/Card'

function Projects({projects}){

    const projCards = projects.map(project => {
      return (
        <Card
          title={project.title}
          info={project.info}
          stack={project.stack}
        />
      )
    })
  
    return (
    <div className='project-section'>
      <div className='proj-container'>
        {projCards}
      </div>
      <section className='display-section'>
        <div className='display' style={{ 
         backgroundImage: `url(${projects[0].image})` }}></div>
      </section>
    </div>
    )
  }

// class Projects extends Component {
//     constructor() {
//       super();
//       this.state = {
//         projDisplay:''
//     }
//   }  
//     render(){
//       return (
//         <div className='project-section'>
//             <section className='details'>
//                 <section className='details-1'></section>
//                    <h3 className='title-1'>{data[1].title}</h3>
//                 <section className='details-2'></section>
//             </section>
//             <section className='display-section'>
//                 <div className='display'></div>
//             </section>
//         </div>
//       )
//     };
//   }

  export default Projects;