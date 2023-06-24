import { data } from '../../Assets/data';
import React, { Component } from 'react';
import './Projects.css';
import roomBg from '../Images/room-bg.jpeg'
import Card from '../Card/Card'
import book1 from '../Images/book1.png'
import book2 from '../Images/book2.png'
import rancid1 from '../Images/rancid1.png'
import rancid2 from '../Images/rancid2.png'


function Projects({projects, display}){

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
         backgroundImage: `url(${projects[0].image})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'
        }}
        ></div>
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