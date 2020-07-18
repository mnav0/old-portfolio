import React from 'react';
import './styles.css';
import NavBar from '../../components/NavBar';
import { NavLink } from 'react-router-dom';
import {ReactComponent as DevelopShape2} from '../../assets/develop2.svg';
import ProjectOverview from '../../components/ProjectOverview';
import selfServiceDesktop from '../../assets/self-service-desktop-1.png';
import selfServiceMobile from '../../assets/self-service-mobile-1.png';
import ideaDesktop from '../../assets/idea-desktop-1.png';
import ideaMobile from '../../assets/idea-mobile-1.png';

const Develop = () => {
    return (
        <div>
        <NavBar />
        <DevelopShape2 className="develop-shape-2"/>
        <a href="https://idea-anniversary.netlify.app/" target="_blank" rel="noopener noreferrer"className="idea-overview">
                <ProjectOverview background="rgba(255, 251, 245, 0.8) !important" projectTitle="IDEA 10 Year Anniversary" projectDescription="A website to celebrate the 10 year anniversary of IDEA, Northeastern University’s student-led venture accelerator."
                            projectTags={["UI/UX", "Wireframing", "User Research", "React"]}
                            desktopImage={ideaDesktop} mobileImage={ideaMobile}/>                   
        </a>
        <NavLink to="/selfservice" className="service-portal-overview">
                <ProjectOverview background="rgba(255, 251, 245, 0.8) !important" projectTitle="Self-Service Portal" projectDescription="A self-service technology help portal to empower Manulife/John Hancock employees."
                            projectTags={["UI/UX", "Prototyping", "HTML/CSS", "JavaScript"]}
                            desktopImage={selfServiceDesktop} mobileImage={selfServiceMobile}/>
                            </NavLink>
        </div>
        
    );
};

export default Develop;