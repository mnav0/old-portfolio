import React, { useState } from 'react';
import DesignHover from '../../components/DesignHover';
import DevelopHover from '../../components/DevelopHover';
import ArtsHover from '../../components/ArtsHover';
import './styles.css';
import { NavLink } from 'react-router-dom';

import {ReactComponent as DesignShape1} from '../../assets/design1.svg';
import {ReactComponent as DevelopShape1} from '../../assets/develop1.svg';
import {ReactComponent as ArtsShape1} from '../../assets/arts1.svg';
import pinkCircle from '../../assets/logo-lg-pink.png';
import yellowCircle from '../../assets/logo-lg-yellow.png';
import blueCircle from '../../assets/logo-lg-blue.png';
import drawing from '../../assets/profile-drawing.png';

function Home() {
    const [hoverDesign, setHoverDesign] = useState(false)
    const [hoverDevelop, setHoverDevelop] = useState(false)
    const [hoverArts, setHoverArts] = useState(false)

    const updateHoverDesign = () => {
        setHoverDesign(!hoverDesign)
    }

    const updateHoverDevelop = () => {
        setHoverDevelop(!hoverDevelop)
    }

    const updateHoverArts = () => {
        setHoverArts(!hoverArts)
    }

    return (
        <div>
            <div className="circles">
                <img src={drawing} alt="Portrait drawing" className={hoverDesign || hoverDevelop || hoverArts ? "profile-drawing hide" : "profile-drawing"}/>
                <img src={pinkCircle} alt="Pink circle" className={hoverDesign || hoverArts ? "pink-circle hide" : "pink-circle"}/>
                <img src={yellowCircle} alt="Yellow circle" className={hoverArts || hoverDevelop ? "yellow-circle hide" : "yellow-circle"}/>
                <img src={blueCircle} alt="Blue circle" className={hoverDesign || hoverDevelop ? "blue-circle hide" : "blue-circle"}/>
            </div>
            <div className="intro-statement">
                <p className={hoverDesign || hoverDevelop || hoverArts ? "fade-away" : ""}>A </p>

                <NavLink to="/design"><DesignHover updateHoverDesign={updateHoverDesign} className={hoverDevelop || hoverArts ? "fade-away" : ""}/></NavLink>
                
                <p className={hoverDesign || hoverDevelop || hoverArts ? "fade-away" : ""}>and </p>

                <NavLink to="/develop"><DevelopHover updateHoverDevelop={updateHoverDevelop} className={hoverDesign || hoverArts ? "fade-away" : ""}/></NavLink>

                <p className={hoverDesign || hoverDevelop || hoverArts ? "fade-away" : ""}>with a background in </p>

                <a href="https://www.instagram.com/mnclaire/?hl=en" target="_blank" rel="noopener noreferrer"><ArtsHover updateHoverArts={updateHoverArts} className={hoverDesign || hoverDevelop ? "fade-away" : ""}/></a>

                <p>.</p>
            </div>

            <div className= {hoverDesign ? "design-shape-1 show-shapes" : "design-shape-1"}>
                <DesignShape1 />
            </div>

            <div className= {hoverDevelop ? "develop-shape-1 show-shapes" : "develop-shape-1"}>
                <DevelopShape1 />
            </div>

            <div className= {hoverArts ? "arts-shape-1 show-shapes" : "arts-shape-1"}>
                <ArtsShape1 />
            </div>
            
        </div>
        
    )

}

export default Home;