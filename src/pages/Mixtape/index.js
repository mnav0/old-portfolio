import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import ProjectHead from '../../components/ProjectHead';
import desktop1 from '../../assets/mixtape-desktop-2.png';
import mobile1 from '../../assets/mixtape-mobile-2.png';
import BackButton from '../../components/BackButton';
import LineTo from '../../components/LineTo';

const Mixtape = () => {
    
    return (
        <div className="mixtape">
            <ProjectHead background="#CADEC5" textColor="#392525" headTitle="Mixtape" 
                        headDescription="A music-listening service that uses a remote database which can be edited by users on the front-end."
                        desktopImage={desktop1} mobileImage={mobile1}/>
            <NavLink to="/develop"><BackButton /></NavLink>
            <div className="project-detail">
            <LineTo sectionTitle="details" sectionDescription={["More details coming soon!"]} />
            <p>For now, you can view the server-side repository for Mixtape <a href="https://github.com/hannahweiss/database_project" target="_blank" rel="noopener noreferrer">here</a> and the client-side repository <a href="https://github.com/mnav0/mixtape-ui" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
        </div>
    );
};

export default Mixtape;