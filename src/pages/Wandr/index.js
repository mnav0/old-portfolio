import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import ProjectHead from '../../components/ProjectHead';
import desktop1 from '../../assets/wandr-desktop-2.png';
import mobile1 from '../../assets/wandr-mobile-2.png';
import BackButton from '../../components/BackButton';
import LineTo from '../../components/LineTo';
import LineFrom from '../../components/LineFrom';

const Wandr = () => {
    return (
        <div>
            <ProjectHead background="#FFE39C" textColor="#6A6279" headTitle="wandr" 
                        headDescription="A website for anxious travelers to take the stress out of planning a trip."
                        desktopImage={desktop1} mobileImage={mobile1}/>
            <NavLink to="/design"><BackButton /></NavLink>
            <LineTo sectionTitle="the problem" sectionDescription={["There is no travel app or website that allows you to find comprehensive information about things to do and record that information in an itinerary format in the same place.", 
                "When planning a trip, people have to search through many different websites to find information to build an itinerary, and end up needing to save their findings in a separate place.", 
                "People hate planning trips because of this process."]}/>
            <LineFrom sectionTitle="research & discovery" sectionDescription={["I began by interviewing 5 different young adults about how they travel to get a more accurate idea of where pain points lie throughout the travel planning process. I chose to talk to people who I knew lay on all different parts of the spectrum between over-planning a trip and traveling very spontaneously so that I could account for a broader range of user types.", 
                "I asked them questions about the steps they take to plan a trip before departing, how they choose things to do while traveling, and how they decide how to fill their days once on the trip.", 
                "Based on these interviews, I was able to narrow it down to a few user goals and pain points while planning travel."]}/>
        </div>
    );
};

export default Wandr;