import React from 'react';
import './Information.css';

const Information = ( {about, skills, projects, contact} ) => {
        return (
            <div className='information-section'>
               <button className='about'>About</button>
               <button className='skills'>Skills</button>
               <button className='projects'>Projects</button>
               <button className='contact'>Contact</button>
            </div>
        )
    }

export default Information;