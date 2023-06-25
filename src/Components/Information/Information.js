import React from 'react';
import './Information.css';

const Information = ( {about, skills, projects, contact} ) => {
        return (
            <div className='information-section'>
               <a className='home' href='#home-page'>
            <button className='home-btn'>
            Home</button>
            </a>
            <a className='about' href='#about-page'>
             <button className='about-btn'>
            About</button>
            </a>
               <a className='projects' href='#projects-page'>
            <button className='projects-btn'>
            Projects</button>
            </a>
            <a className='contact' href='#contact-page'>
             <button className='contact-btn'>
            Contact</button>
            </a>
            </div>
        )
    }

export default Information;