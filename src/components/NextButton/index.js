import React, { useState } from 'react';
import './styles.css';


const NextButton = (props) => {
    const [hoverNext, setHoverNext] = useState(false);

    const updateHoverNext = () => {
        setHoverNext(!hoverNext)
    }

    return (
        <div className="next" onMouseEnter={() => updateHoverNext()} onMouseLeave={() => updateHoverNext()}>
            <div className="yellow-arrow-next"></div>
            <div className="yellow-line-next"></div>
            <p className={hoverNext ? "light-blue" : "yellow"}>NEXT</p>
        </div>
    );
};

export default NextButton;