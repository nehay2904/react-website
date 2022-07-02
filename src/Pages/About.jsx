import React , {useState} from 'react'
import './About.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
const About = () => {
    const [click, setClick] = useState(true)
    const clickHandler =() =>{
        setClick(!click)
    }
  return (
        <div className="about">
            <motion.div onClick={clickHandler} className={click ? "card cardThird" : 'card cardThird active' }>
                <div className="heading">
                   <h1 className='aboutHeading'>About</h1>
                   <a href="./"> <h2 className='aboutSubheading'>Close</h2></a>
                </div>
                <div className="contentcard">
                <div className="content">
                    {/* <h2>ddddd</h2> */}
                    <p>My Name is Neha and i m currently pursuing my Btech degree in Mining Engineering at National Institute Of Technology Raipur. Since it is a challenging profession this fascinates me more than anything. I am a UI/UX Developer. Its my passion to build creative user interface that result in awesome user experience. Adding motion graphics to my websites and building animation is part of my work and excites me lot </p>
                 </div>
                </div>
            </motion.div>
        
        </div>
    )
}

export default About