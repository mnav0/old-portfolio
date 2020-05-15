import React from 'react';
import profile from '../../assets/profile.png';
import pinkCircle from '../../assets/logo-lg-pink.png';
import yellowCircle from '../../assets/logo-lg-yellow.png';
import blueCircle from '../../assets/logo-lg-blue.png';
import './styles.css';

const About = () => {
    return (
        <div className="about-all">
            <div className="about-picture">
                <div className="circles">
                    <img src={blueCircle} alt="Blue circle" className="blue-circle"/>
                    <img src={yellowCircle} alt="Yellow circle" className="yellow-circle"/>
                    <img src={pinkCircle} alt="Pink circle" className="pink-circle"/>
                    <img src={profile} alt="Profile" className="profile" />
                </div>
            </div>
            <div className="about-text">
                <h1>hi, i’m maggie!</h1>
                <p>I grew up in Cleveland, Ohio, and am currently studying Computer Science and Interaction Design at Northeastern University.</p>
                <p>I love exploring how technology can be used as both an inspiration and a tool to produce engaging and intuitive user experiences.</p>
                <p>Some more things that make me happy: live music, art museums, yoga, playing piano, and learning French.</p>
                <p>You can view my resume here, contact me by email (mnavracruz@gmail.com), or see more of my work using the information below. I can’t wait to hear from you!</p>
            </div>
        </div>
        
    );
};

export default About;