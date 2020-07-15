import React from 'react';
import './styles.css';

const LineFrom = (props) => {
    const descList = props.sectionDescription;
    const title = props.sectionTitle;
    // const titleW = 0;

    const descriptions = descList.map((description, index) =>
        <p key={index}>{description}</p>
    );


    return (
        <div className="line-from">
            <h1 ref={node => node && console.log(node.offsetWidth)} className="title" >{title}</h1>
            <div className="line-container"><div className="line"></div></div>
            <div className="descriptions">{descriptions}</div>

        </div>
    );
};

export default LineFrom;