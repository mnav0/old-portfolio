import React, { useState } from 'react';
import DesignHover from '../DesignHover';
import DevelopHover from '../DevelopHover';
import ArtsHover from '../ArtsHover';
import './styles.css';
import { NavLink } from 'react-router-dom';

import {ReactComponent as DesignShape1} from '../../assets/design1.svg';
import pinkCircle from '../../assets/logo-lg-pink.png';
import yellowCircle from '../../assets/logo-lg-yellow.png';
import blueCircle from '../../assets/logo-lg-blue.png';
import drawing from '../../assets/profile-drawing.png';

function IntroStatement() {
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

                <NavLink to="/arts"><ArtsHover updateHoverArts={updateHoverArts} className={hoverDesign || hoverDevelop ? "fade-away" : ""}/></NavLink>

                <p>.</p>
            </div>

            <div className= {hoverDesign ? "design-shapes show-shapes" : "design-shapes"}>
                <div className="design-shape-1">
                    <DesignShape1 />
                </div>
            </div>
        </div>
        
    )

}

export default IntroStatement;