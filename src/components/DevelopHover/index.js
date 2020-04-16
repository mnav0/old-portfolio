import React from 'react';
import './styles.css';

function DevelopHover(props) {

    const { updateHoverDevelop, className} = props

    return (
        <div className={`develop-hover ${className}`} onMouseEnter={() => updateHoverDevelop()}
                                      onMouseLeave={() => updateHoverDevelop()}>front-end developer</div>
    )
}

export default DevelopHover;