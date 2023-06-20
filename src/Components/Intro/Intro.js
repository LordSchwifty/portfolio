import React from 'react';
import htmlLogo from '../Images/html.png'
import cssLogo from '../Images/css.png'
import javascriptLogo from '../Images/javascript.png'
import reactLogo from '../Images/react.png'
import animeBg from '../Images/bg2.png'
import './Intro.css'

const Intro = ( header, socials ) => {
return (
    <div className='intro-container'>
       <section className="header">
         <img className="okb" src="https://u52e5d76onuauylpyzg7rvvvrlkz4muq4j4epjnckpbhtcgrpnwa.arweave.net/p3ROj_5zaAphb8ZN-Na1itWeMpDieEelolPCeYjRe2w" alt='Web3 PFP'></img>
         <h1 className='name'>Hi! My name is Tom</h1>
       </section>
       <section className='stack'>
         <h2 className="tech-stack">Tech Stack |</h2>
         <img className='html' src={htmlLogo} alt='html-logo'></img>
         <img className='css' src={cssLogo} alt='css-logo'></img>
         <img className='javascript' src={javascriptLogo} alt='javascript-logo'></img> 
         <img className='react' src={reactLogo} alt='react-logo'></img>  
       </section>
    </div>
)
}

// style={{
//   width: '100%',
//   height: '100vh',
//   backgroundImage: `url(${animeBg})`
// }}

export default Intro;