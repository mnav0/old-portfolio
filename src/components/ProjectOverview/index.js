import React from 'react';
import './styles.css';

const ProjectOverview = (props) => {

    const tagList = props.projectTags;
    const tags = tagList.map((tag, index) =>
        <p key={index}>{tag}</p>
    );
    return (
        <div className="project-overview">
            <div className="text">
                <h1 className="title" style={{color: props.textColor}}>{props.projectTitle}</h1>
                <p className="description" style={{color: props.textColor}}>{props.projectDescription}</p>
                <div className="tags" style={{color: props.textColor}}>{tags}</div>
            </div>
            <div className="images">
                <div className="desktop-container">
                    <img src={props.desktopImage} alt="Desktop screenshot" className="desktop"/>
                </div>
                <img src={props.mobileImage} alt="Mobile screenshot" className="mobile"/>
            </div>
        </div>
    );
};

export default ProjectOverview;