import React from 'react';
import './styles.css';

const LineFrom = (props) => {
    const { sectionDescription, sectionTitle, maxW, link } = props

    const descriptions = sectionDescription.map((description, index) =>{
        let output = ''
        if (description.includes('Click here')) {
            output = <a href={link} target="_blank" rel="noopener noreferrer">{description}</a>
        }
        else {
            output = <p key={index}>{description}</p>
        }
        return output
    });


    return (
        <div className="line-from">
            <h1 ref={node => node && console.log(node.offsetWidth)} className="title" >{sectionTitle}</h1>
            <div className="line-container" style={{maxWidth: `${maxW}`}}><div className="line"></div></div>
            <div className="descriptions">{descriptions}</div>

        </div>
    );
};

export default LineFrom;