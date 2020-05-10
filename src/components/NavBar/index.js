import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [hoverNavDesign, setHoverNavDesign] = useState(false)
    const [hoverNavDevelop, setHoverNavDevelop] = useState(false)
    const [hoverNavArts, setHoverNavArts] = useState(false)

    const updateHoverNavDesign = () => {
        setHoverNavDesign(!hoverNavDesign)
    }

    const updateHoverNavDevelop = () => {
        setHoverNavDevelop(!hoverNavDevelop)
    }

    const updateHoverNavArts = () => {
        setHoverNavArts(!hoverNavArts)
    }

    return (
        <div className="nav-bar">
           <NavLink to="/design" className={hoverNavDesign? "active" : "resting-state"} activeClassName="active"
                                            onMouseEnter={() => updateHoverNavDesign()}
                                            onMouseLeave={() => updateHoverNavDesign()}><div className="design-nav">designer</div></NavLink>
           <NavLink to="/develop" className={hoverNavDevelop ? "active" : "resting-state"} activeClassName="active"
                                            onMouseEnter={() => updateHoverNavDevelop()}
                                            onMouseLeave={() => updateHoverNavDevelop()}><div className="develop-nav">developer</div></NavLink>
           <NavLink to="/arts" className={hoverNavArts ? "active" : "resting-state"} activeClassName="active"
                                            onMouseEnter={() => updateHoverNavArts()}
                                            onMouseLeave={() => updateHoverNavArts()}><div className="arts-nav">fine artist</div></NavLink>
        </div>
        
    );
};

export default NavBar;