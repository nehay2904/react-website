import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
        <div className="headingSkills">
        <a href="./"><h4>close</h4></a>
        </div>
        <div className="SubheadingSkills">
          <h5>SKILLS I M PRACTCING</h5>
        </div>
        <div className="cardSection">
                <div className="cardFour">
                    <h1>JAVASCRIPT</h1>
                    <p>I have been practicing javascript for past 3 months. I had decent practice of Arrays, objects and functions</p>
                </div>
                <div className="cardFour">
                <h1>React.js</h1>
                <p>React.js is javascript library. i have been practicing React.js for past 2 months. I have been working with the hooks and other librabries</p>
            </div>
            <div className="cardFour">
                <h1>React Native</h1>
                <p>React native helps to build dyanamic  mobile apps . i m beginner in this</p>
            </div>
        </div>
    </div>
  )
}

export default Skills