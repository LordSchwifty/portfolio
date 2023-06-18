import React, { Component } from 'react';
import './Information.css';

class Information extends Component {
    constructor() {
        super();
        this.state = {
            about: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        }
    }
    render() {
        return (
            <div className='information-section'>
               <section className='about'>{this.state.about}</section>
               <section className='skills'>{this.state.skills}</section>
               <section className='projects'>{this.state.projects}</section>
               <section className='contact'>{this.state.contact}</section>
            </div>
        )
    }
}
export default Information;