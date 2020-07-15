import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';


const BackButton = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoverBack, setHoverBack] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    const updateHoverBack = () => {
        setHoverBack(!hoverBack)
    }

    return (
        <div className="back" onMouseEnter={() => updateHoverBack()} onMouseLeave={() => updateHoverBack()}>
            <div className={scrollPosition > 35 ? "yellow-arrow" : "back-arrow"}></div>
            <div className={scrollPosition > 35 ? "yellow-line" : "back-line"}></div>
            <p className={hoverBack ? "light-blue" : scrollPosition > 35 ? "yellow" : "blue"}>BACK</p>
        </div>
    );
};

export default BackButton;