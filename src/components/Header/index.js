import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logoHead from '../../assets/logo-sm-full.png';


const Header = () => {
    const [hoverHeadName, setHoverHead] = useState(false);
    const [hoverHeadLogo, setHoverLogo] = useState(false);
    var headerName = "header-name" + (hoverHeadName ? " hovered-head" : "");

    const updateHoverHead = () => {
        setHoverHead(!hoverHeadName)
    }

    const updateHoverLogo = () => {
        setHoverLogo(!hoverHeadLogo)
    }

    return (
        <div className={hoverHeadLogo ? "header hovered-logo" : "header"}>
            <NavLink to="/"><img src={logoHead} onMouseEnter={() => updateHoverLogo()}
                                onMouseLeave={() => updateHoverLogo()}
                                className = "header-logo" alt="Logo"/></NavLink>
            <NavLink to="/about" onMouseEnter={() => updateHoverHead()}
                                onMouseLeave={() => updateHoverHead()}
                                className = {headerName}>magdalena navracruz</NavLink>
            <NavLink to="/about" onMouseEnter={() => updateHoverHead()}
                                onMouseLeave={() => updateHoverHead()}
                                className = {headerName + " header-mobile"}>mn</NavLink>
        </div>
    );
};

export default Header;