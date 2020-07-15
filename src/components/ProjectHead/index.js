import React from 'react';
import './styles.css';


const ProjectHead = (props) => {
    return (
        <div className="project-head" style={{backgroundColor: props.background}}>
                <div className="title" style={{color: props.textColor}}>{props.headTitle}</div>
                <div className="description" style={{color: props.textColor}}>{props.headDescription}</div>
                <div className="images">
                    <img src={props.desktopImage} className="desktop" alt="Desktop screenshot"/>
                    <img src={props.mobileImage} className="mobile" alt="Mobile screenshot"/>
                </div>
        </div>
    );
};

export default ProjectHead;