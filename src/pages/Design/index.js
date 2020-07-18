import React from 'react';
import './styles.css';
import NavBar from '../../components/NavBar';
import { NavLink } from 'react-router-dom';
import {ReactComponent as DesignShape2} from '../../assets/design2.svg';
import ProjectOverview from '../../components/ProjectOverview';
import wandrDesktop from '../../assets/wandr-desktop-1.png';
import wandrMobile from '../../assets/wandr-mobile-1.png';
import pwpDesktop from '../../assets/pwp-desktop-1.png';
import pwpMobile from '../../assets/pwp-mobile-1.png';

const Design = () => {

    return (
        <div>
            <NavBar />
            <DesignShape2 className="design-shape-2"/>
            <NavLink to="/wandr" className="wandr-overview">
                <ProjectOverview textColor="#6A6279" background="rgba(255, 251, 245, 0.8) !important" projectTitle="wandr" projectDescription="A website for anxious travelers to take the stress out of planning a trip."
                            projectTags={["UI/UX", "Branding", "Prototyping", "User Research"]}
                            desktopImage={wandrDesktop} mobileImage={wandrMobile}/>
            </NavLink>
            <NavLink to="/pwp" className="pwp-overview"><ProjectOverview textColor="#5F4F4F" projectTitle="Painting without Permission" projectDescription="An installation designed to spark conversation about public art on Northeastern’s campus."
                            projectTags={["UI/UX", "HTML/CSS", "AWS", "Experience Design"]}
                            desktopImage={pwpDesktop} mobileImage={pwpMobile}/>
            </NavLink>
        </div>
    );
};

export default Design;