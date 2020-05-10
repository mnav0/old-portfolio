import React, { useState } from 'react';
import './styles.css';

const ProjectOverview = (props) => {
    const tagList = props.projectTags;
    const tags = tagList.map((tag, index) =>
        <p key={index}>{tag}</p>
    );
    return (
        <div className="project-overview">
            <div className="text">
                <h1 className="title">{props.projectTitle}</h1>
                <p className="description">{props.projectDescription}</p>
                <div className="tags">{tags}</div>
            </div>
            <div className="images">
                <img src={props.desktopImage} alt="Desktop screenshot" className="desktop"/>
                <img src={props.mobileImage} alt="Mobile screenshot" className="mobile"/>
            </div>
        </div>
    );
};

export default ProjectOverview;