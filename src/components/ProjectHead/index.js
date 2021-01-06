import React from 'react';
import './styles.css';


const ProjectHead = (props) => {
    return (
        <div className="project-head" style={{backgroundColor: props.background}}>
                <div className="title" style={{color: props.textColor}}>{props.headTitle}</div>
                <div className="description" style={{color: props.textColor}}>{props.headDescription}</div>
                <div className="images">
                    <div className="desktop-container">
                    <img src={props.desktopImage} className="desktop" alt="Desktop screenshot"/>
                    </div>
                    <div className="mobile-container">
                    <img src={props.mobileImage} className="mobile" alt="Mobile screenshot"/>
                    </div>
                </div>
        </div>
    );
};

export default ProjectHead;