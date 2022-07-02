import React from 'react'
import './Contact.css'
import ProfilePhoto from '../Images/profile.jpeg'
const Contact = () => {
    return (
        <div className="contact">
            <div className="cardSecond">
               <div className="contactHeading">
                     <a href="./"><h6>Close</h6></a>
               <div className="iamge">
                    <img className='profile' src={ProfilePhoto} alt="" srcset="" />
                </div>
               </div>
                <div className="contactMethods">
                    <div className="call">
                        <i class="contactIcons fa-solid fa-phone"></i>
                        <h2>CALL</h2>
                        <h3>9352625460</h3>
                    </div>
                    <div className="email">
                        <i class="contactIcons fa-solid fa-envelope"></i>
                        <h2>Email Id</h2>
                        <h3>yednurwarneha@gmail.com</h3>
                    </div>
                    <div className="location">
                        <i class="contactIcons fa-solid fa-location-dot"></i>
                        <h2>Address</h2>
                        <h3>Chandrapur, Maharashtra</h3>
                    </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/neha.yednurwar.3/" target={'_blank'}><i className="icon fa-brands fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/neha_y13/?hl=en" target={'_blank'} ><i className="icon fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/NYednurwar" target={'_blank'} ><i className="icon fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/neha-y-1721b0201/" target={'_blank'}> <i class="icon fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/nehay2904" target={'_blank'}> <i className="icon fa-brands fa-github"></i></a>
             
                </div>
            </div>
        </div>
    )
}

export default Contact