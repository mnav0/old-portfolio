import React from 'react';
import './styles.css';

function DesignHover(props) {

    const { updateHoverDesign, className } = props

    return (
        <div className={`design-hover ${className}`} onMouseEnter={() => updateHoverDesign()}
                                      onMouseLeave={() => updateHoverDesign()}>UI/UX designer</div>
    )
}

export default DesignHover;