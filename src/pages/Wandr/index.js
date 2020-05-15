import React from 'react';
import './styles.css';
import ProjectHead from '../../components/ProjectHead';
import desktop1 from '../../assets/wandr-desktop-2.png';
import mobile1 from '../../assets/wandr-mobile-2.png';

const Wandr = () => {
    return (
        <div>
            <ProjectHead background="#FFE39C" textColor="#6A6279" headTitle="wandr" 
                        headDescription="A website for anxious travelers to take the stress out of planning a trip."
                        desktopImage={desktop1} mobileImage={mobile1}/>
        </div>
    );
};

export default Wandr;