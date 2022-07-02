import React from 'react'
import './MainPage.css'
import Photo from '../../Images/PhotoOne.jpg'
import DemoOne from '../Javascript effects/DemoOne'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const MainPage = () => {
    return (
        <div className="main_page">

            <div className="page">
                <DemoOne />
            </div>
           <nav>
              <img className='image_photo' src={Photo} alt="" srcset="" />
              <ul className='linksitem'>
                <li><Link className='links' to={"/about"}>ABOUT</Link></li>
                <li><Link className='links' to={'/skills'}>SKILLS</Link></li>
                <li><Link className='links' to={"/contact"}>CONTACT</Link></li>
              </ul>
           </nav>

           <div>
                <span>WE BUILD WEBSITES AND CREATE AMAZING UI</span>
           </div>
        </div>
    )
}

export default MainPage