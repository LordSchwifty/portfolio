import React from 'react';
import './Contact.css';
import twitter from '../Images/twitter.png';
import github from '../Images/github.png';
import linkedin from '../Images/linkedin.png'


const Contact = ( {contact} ) => {
    return (
        <div className="contact-section" id='contact-page'>
          <section className='contact-box'>
          <h3 className='contact-header'>Contact</h3>
          <p className='email'>Email: tdoder89@gmail.com</p>
          <p className='phone'>Phone: (225)409-7730</p>
        </section>
          <section className='socials-section'>
            <a className='twitter-link' target='_blank' href='https://www.twitter.com/lordschwifty'>
            <img className='twitter' src={twitter}></img>
            </a>
            <a className='linkedin-link' target='_blank' href='https://www.linkedin.com/in/tom-doder'>
            <img className='linkedin' src={linkedin}></img>
            </a>
            <a className='github-link' target='_blank' href='https://www.github.com/lordschwifty'>
            <img className='github' src={github}></img>
            </a>
          </section>
        </div>
    )
}

export default Contact;