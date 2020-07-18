import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import ProjectHead from '../../components/ProjectHead';
import desktop1 from '../../assets/pwp-desktop-2.png';
import mobile1 from '../../assets/pwp-mobile-2.png';
import BackButton from '../../components/BackButton';
import LineTo from '../../components/LineTo';
// import LineFrom from '../../components/LineFrom';
// import mural1 from '../../assets/pwp-mural-1.jpg';
// import mural2 from '../../assets/pwp-mural-2.jpg';
// import desktopv1 from '../../assets/pwp-desktop-v1-1.png';
// import desktopv2 from '../../assets/pwp-desktop-v2-1.png';

const PWP = () => {
    
    return (
        <div className="pwp">
            <ProjectHead background="#CADEC5" textColor="#392525" headTitle="Painting without Permission" 
                        headDescription="An installation designed to spark conversation about public art."
                        desktopImage={desktop1} mobileImage={mobile1}/>
            <NavLink to="/design"><BackButton /></NavLink>
            <LineTo sectionTitle="coming soon!" sectionDescription={[""]}/>
            {/* <div className="project-detail">
            <LineTo sectionTitle="the problem" sectionDescription={["For my 5D Fundamentals class in the fall of 2018, we were instructed to intervene with a site or system for our final project, using the methodology of contemporary artists we had studied throughout the semester to guide us through our approach to this prompt."]} />
            <LineFrom sectionTitle="research & discovery" sectionDescription={["I took inspiration from Suzanne Lacy’s work, site-specific performance pieces that started a conversation about the community in which they took place."]} maxW={'50%'}/>
            <LineTo sectionTitle="the process" sectionDescription={["I have always wanted to paint a mural in a public place, so I decided to combine this with my goal of starting a conversation within the Northeastern community by completing four murals using tape around campus without first obtaining permission to do so.",
                "I used tape so that the murals would not permanently damage any space. I expected to be questioned or interacted with while completing murals like the ones below, but to my surprise, no one stopped me from taping the walls."]} />
            <img src={mural1} alt="Mural in staircase" className="pwp-mural-1"/>
            <img src={mural2} alt="Mural in staircase" className="pwp-mural-2"/>
            <LineFrom sectionTitle="site development" sectionDescription={["After completing my murals, I compiled the observations I had made including the amount of people had passed me vs. how many interacted with me, pictures of my murals and information about the time and location of each performance, and began creating wireframes for a website to display this data.", 
                "Below are some of the initial pages I designed, including the homepage and my process diagram. I wanted to incorporate the lines that were inspired by the appearance of the tape in each mural throughout my site, using them differently in each page."]} maxW={'55%'}/>
            </div> */}
        </div>
    );
};

export default PWP;