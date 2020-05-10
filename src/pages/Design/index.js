import React from 'react';
import './styles.css';
import NavBar from '../../components/NavBar';
import {ReactComponent as DesignShape2} from '../../assets/design2.svg';
import ProjectOverview from '../../components/ProjectOverview';
import wandrDesktop from '../../assets/wandr-desktop-1.png';
import wandrMobile from '../../assets/wandr-mobile-1.png';

const Design = () => {

    return (
        <div>
            <NavBar />
            <DesignShape2 className="design-shape-2"/>
            <div className="wandr-overview"><ProjectOverview projectTitle="wandr" projectDescription="A website for anxious travelers to take the stress out of planning a trip."
                            projectTags={["UI/UX", "Branding", "Prototyping", "User Research"]}
                            desktopImage={wandrDesktop} mobileImage={wandrMobile}/>
            </div>
        </div>
    );
};

export default Design;