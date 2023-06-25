import { data } from '../../Assets/data';
import React, { useState } from 'react';
import './Projects.css';
import roomBg from '../Images/room-bg.jpeg'
import sunsetBg from '../Images/pxfuel.jpg'
import Card from '../Card/Card'
import book1 from '../Images/book1.png'
import book2 from '../Images/book2.png'
import rancid1 from '../Images/rancid1.png'
import rancid2 from '../Images/rancid2.png'
import github from '../Images/github.png'
import live from '../Images/live.png'



function Projects({projects}){
const [showcase, setShowcase]= useState([book1, 'https://github.com/LordSchwifty/Book-Saver', 'https://trevorfitz0.github.io/Book-Saver/#/'])
    const projCards = projects.map((project, i) => {
      return (
        <Card
          title={project.title}
          info={project.info}
          stack={project.stack}
          image={project.image}
          github={project.github}
          deployed={project.deployed}
          setShowcase={setShowcase}
          key={i}
        />
      )
    })
  
    return (
    <div className='project-section' id='projects-page'>
      <div className='proj-container'>
        {projCards}
      </div>
      <section className='display-section'>
        <div className='display' style={{ 
         backgroundImage: `url(${showcase[0]})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'
        }}
        ></div>
      </section>
      <section className='proj-links'>
        <a className='github-link' target='_blank' href={showcase[1]}>
            <button className='github-btn'>
            Github Repo</button>
            </a>
        <a className='deployed-link' target='_blank' href={showcase[2]}>
           <button className='live-btn'>
            Live Demo</button>
        </a>
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