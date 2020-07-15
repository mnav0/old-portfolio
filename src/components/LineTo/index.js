import React from 'react';
import './styles.css';

const LineTo = (props) => {
    const descList = props.sectionDescription;
    const descriptions = descList.map((description, index) =>
        <p key={index}>{description}</p>
    );

    return (
        <div className="line-to">
            <div className="line"></div>
            <h1 className="title">{props.sectionTitle}</h1>
            <div className="descriptions">{descriptions}</div>

        </div>
    );
};

export default LineTo;