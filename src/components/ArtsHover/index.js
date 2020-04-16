import React from 'react';
import './styles.css';

function ArtsHover(props) {

    const { updateHoverArts, className} = props

    return (
        <div className={`arts-hover ${className}`} onMouseEnter={() => updateHoverArts()}
                                    onMouseLeave={() => updateHoverArts()}>fine arts</div>
    )
}

export default ArtsHover;