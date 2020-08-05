import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import ProjectHead from '../../components/ProjectHead';
import desktop1 from '../../assets/self-service-desktop-1.png';
import mobile1 from '../../assets/self-service-mobile-2.png';
import BackButton from '../../components/BackButton';
import LineTo from '../../components/LineTo';
import LineFrom from '../../components/LineFrom';
import home1 from '../../assets/self-service-home-1.png';
import home2 from '../../assets/self-service-home-2.png';
import home3 from '../../assets/self-service-home-3.png';
import support3 from '../../assets/self-service-support-3.png';
import walkthrough from '../../assets/self-service-walkthrough-1.mp4';

const SelfService = () => {
    
    return (
        <div className="self-service">
            <ProjectHead background="#BAF8D5" textColor="#4E4E4E" headTitle="Self-Service Portal" 
                        headDescription="A self-service technology help portal to empower Manulife/John Hancock employees."
                        desktopImage={desktop1} mobileImage={mobile1}/>
            <NavLink to="/develop"><BackButton /></NavLink>
            {/* <LineTo sectionTitle="coming soon!" sectionDescription={[""]}/> */}
            <div className="project-detail">
            <LineTo sectionTitle="the problem" sectionDescription={["As an IT Web Developer Co-op for John Hancock, I worked for 6 months to create a self-service technology help portal for the Enterprise Mac team.", "The goal of this project was to create a one-stop website for Manulife/John Hancock employees to consult when setting up or running into problems with their corporate devices."]} />
            <LineFrom sectionTitle="research & discovery" sectionDescription={["Since the site was being created to serve the Apple at Work products, my manager wanted to take inspiration from the Apple Support website, creating a clean and professional look that would make it easy for employees to quickly locate solutions to their problems.", "One of the main goals of this project was to make the website responsive so that new employees, who might not have brought anything other than their phone on their first day, would be able to view the mobile site and use it to independently set up their corporate laptop. To achieve this goal, I researched responsive design and how I could use the fact that this site would primarily be viewed on mobile for the first time to guide the design choices I made while creating the desktop version, sticking to minimal elements that could be stacked and easily viewed on mobile. I also kept this in mind while developing the site, sizing every component relative to the browser width."]} maxW={'50%'}/>
            <LineTo sectionTitle="the process" sectionDescription={["I began by designing wireframes in Adobe XD, laying out content for the home page and support pages first. I worked with my manager to critique my initial versions and create a design system for the site as well as a user story, where the first page that the user would ask to select their product before leading them down a different path depending on this input.", "We then worked through many iterations of the logo and navigation bar as seen below, and decided to stick with the simple Manulife logo in the top left corner of the page, and a dropdown menu on the top right."]} />
            <img src={home1} alt="Initial homepage" className="ss-home-1"/>
            <img src={home2} alt="Initial homepage 2" className="ss-home-2"/>
            <img src={home3} alt="Initial homepage 2" className="ss-home-3"/>
            <LineFrom sectionTitle="site development" sectionDescription={["After creating a finalized version of the wireframes in Adobe XD, I began to code the website using HTML and CSS.", 
                "After the static site was mostly complete, I added animations for the dropdown menu and accordion dropdown using JavaScript and jQuery, and created a contact form using PHP that would send inquiries for technology help directly to my coworker’s email address. These additions are shown in the screenshot below."]} maxW={'57%'}/>
            <img src={support3} alt="Support page 3" className="ss-support-3"/>
            <LineTo sectionTitle="final website" sectionDescription={["Below is a brief walkthrough of the final developed website."]} />
            <video src={walkthrough} width="750" height="500" controls>
            </video>
            </div>
        </div>
    );
};

export default SelfService;