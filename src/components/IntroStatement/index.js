import React, { useState } from 'react';
import DesignHover from '../DesignHover';
import DevelopHover from '../DevelopHover';
import ArtsHover from '../ArtsHover';
import './styles.css';
import {ReactComponent as DesignShape1} from '../../assets/design1.svg';
import {ReactComponent as DesignShape2} from '../../assets/design2.svg';

function IntroStatement(props) {
    const [hoverDesign, setHoverDesign] = useState(false)
    const [hoverDevelop, setHoverDevelop] = useState(false)
    const [hoverArts, setHoverArts] = useState(false)

    // constructor () {
    //     super()

    //     this.state = {
    //         hover: false,
    //         hover2: false
    //     }

    //     this.updateHoverState = this.updateHoverState.bind(this)
    // }

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
        <div className="intro-statement">
            <p className={hoverDesign || hoverDevelop || hoverArts ? "fade-away" : ""}>A</p>&nbsp;

            <DesignHover updateHoverDesign={updateHoverDesign} className={hoverDevelop || hoverArts ? "fade-away" : ""}/>&nbsp;
            
            <p className={hoverDesign || hoverDevelop || hoverArts ? "fade-away" : ""}>and</p>&nbsp;

            <DevelopHover updateHoverDevelop={updateHoverDevelop} className={hoverDesign || hoverArts ? "fade-away" : ""}/>&nbsp;

            <p className={hoverDesign || hoverDevelop || hoverArts ? "fade-away" : ""}>with a background in</p>&nbsp;

            <ArtsHover updateHoverArts={updateHoverArts} className={hoverDesign || hoverDevelop ? "fade-away" : ""}/>

            <p>.</p>
        </div>

            <div className= {hoverDesign ? "design-shapes show-shapes" : "design-shapes"}>
                <div className="design-shape-1">
                    <DesignShape1 />
                </div>
                <div className="design-shape-2">
                    <DesignShape2 />
                </div>
            </div>
        </div>
        
    )

}

export default IntroStatement;