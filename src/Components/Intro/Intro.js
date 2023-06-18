import React from 'react';
import '../Images/okb7977.png'
import './Intro.css'

const Intro = ( header, socials ) => {
return (
    <div className='intro-container'>
       <section className="header">
         <img className="okb" src="https://u52e5d76onuauylpyzg7rvvvrlkz4muq4j4epjnckpbhtcgrpnwa.arweave.net/p3ROj_5zaAphb8ZN-Na1itWeMpDieEelolPCeYjRe2w" alt='Web3 PFP'></img>
         <h1 className='name'>Hi! My name is Tom</h1>
       </section>
       <section className='socials'>
         <button className='twitter'>Twitter</button>
         <button className='linkedin'>LinkedIn</button>
         <button className='github'>GitHub</button>  
       </section>
    </div>
)
}

export default Intro;