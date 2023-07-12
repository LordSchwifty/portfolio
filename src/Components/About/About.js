import React from 'react';
import './About.css';

const About = ( {about} ) => {
    return (
        <div className="about-section" id='about-page'>
            <section className='about-box'>
            <h1 className="about-header">About Me</h1>
            <p className="bio">- Hi, I'm Tom, a front-end software developer from Washington DC with a passion for creating visually stunning and user-friendly digital experiences.
            
            Before becoming a developer, I taught English overseas and gained valuable communication and interpersonal skills, along with some amazing and eye-opening experiences. I also have experience in digital art and graphic design, giving me an eye for aesthetics and attention to detail.
            
            My interest in the web3 space has fueled my passion for technology, and I am always looking for new ways to learn and grow as a developer. I specialize in HTML, CSS, JavaScript, and React, and I believe in creating digital experiences that not only look great but are also highly functional and intuitive.
            
            I love collaborating with others and bringing ideas to life, and I'm excited to be a part of this ever-evolving field. Let's connect and create something amazing together!</p>
            </section>
</div>
    )
}

export default About;