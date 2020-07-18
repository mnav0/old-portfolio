import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import ProjectHead from '../../components/ProjectHead';
import desktop1 from '../../assets/wandr-desktop-2.png';
import mobile1 from '../../assets/wandr-mobile-2.png';
import BackButton from '../../components/BackButton';
import LineTo from '../../components/LineTo';
import LineFrom from '../../components/LineFrom';
import userChart from '../../assets/user-goals-wandr.png';
import test1 from '../../assets/wandr-test-1.png';
import test2 from '../../assets/wandr-test-2.png';
import styleTile from '../../assets/wandr-style-tile.png';

const Wandr = () => {
    
    return (
        <div className="wandr">
            <ProjectHead background="#FFE39C" textColor="#6A6279" headTitle="wandr" 
                        headDescription="A website for anxious travelers to take the stress out of planning a trip."
                        desktopImage={desktop1} mobileImage={mobile1}/>
            <NavLink to="/design"><BackButton /></NavLink>
            <div className="project-detail">
            <LineTo sectionTitle="the problem" sectionDescription={["There is no travel app or website that allows you to find comprehensive information about things to do and record that information in an itinerary format in the same place.", 
                "When planning a trip, people have to search through many different websites to find information to build an itinerary, and end up needing to save their findings in a separate place.", 
                "People hate planning trips because of this process."]}/>
            <LineFrom sectionTitle="research & discovery" sectionDescription={["I began by interviewing 5 different young adults about how they travel to get a more accurate idea of where pain points lie throughout the travel planning process. I chose to talk to people who I knew lay on all different parts of the spectrum between over-planning a trip and traveling very spontaneously so that I could account for a broader range of user types.", 
                "I asked them questions about the steps they take to plan a trip before departing, how they choose things to do while traveling, and how they decide how to fill their days once on the trip.", 
                "Based on these interviews, I was able to narrow it down to a few user goals and pain points while planning travel."]} maxW={'50%'}/>
            <img src={userChart} alt="User interview takeaways, goals and quotes" className="user-chart-wandr"/>
            <LineTo sectionTitle="competitive analysis" sectionDescription={["I analyzed what was already on the market for planning travel, comparing lonely planet, Google Docs, and Airbnb Adventures to see if they accomplished the user goals I had determined.", 
                "I found that lonely planet and Google Docs allows the user to record travel information, but Airbnb Adventures does not fulfill this goal. I concluded that Airbnb Adventures and lonely planet both are resources to find local things to do in a new place, understand the nuances of a city like navigating public transportation and around how much time people spend at a location, and both of their interfaces are mobile friendly. However, none of these competitors gave the user the ability to see and share a concise itinerary with all of the essential information for a day of travel."]}/>
            <LineFrom sectionTitle="usability testing" sectionDescription={["I asked 5 participants a series of questions to use a low-fidelity version of wandr to plan a trip, from logging in, creating a trip and entering travel information, to adding new activities and viewing their daily itinerary.", 
                "After this testing, I realized I needed to give the user more context for navigating the site, and decided to integrate a top navigation bar to be able to easily store and access things like flight and stay information. I also decided to clarify a few buttons and make some copy language more specific to clear up confusion."]} 
                maxW={'58%'}/>
            <img src={test1} alt="Lo-fi new trip page" className="test1"/>
            <img src={test2} alt="Lo-fi add activity page" className="test2"/>
            <LineTo sectionTitle="branding guidelines" sectionDescription={["When deciding on how to visually represent wandr's brand, I came up with a few adjectives that I wanted to use to guide my design choices.", 
                "I wanted wandr to be clean, simple, and approachable, so as not to visually overwhelm the user when they are planning a trip. I also wanted the interface to be calming, to serve as a soothing guide throughout the stressful process that I found that many users associate with travel. I also wanted wandr's brand to be sophisticated to gear the product more towards the target market of people who have the time and leisure to closely plan their trips.",
                "Based on these adjectives, I chose a simple but classic serif for my headers and for the wordmark, and paired it with a simple serif that would prove easy to read for smaller body type. I also decided to use blue as a background color for the header, because soft blues can induce a calming affect, along with the light yellow as an accent color that has a good level of contrast but is more muted and welcoming than a stark white.",
                "Below is a style tile of the branding guidelines I designed for wandr."]}/>
            <img src={styleTile} alt="Branding guidelines" className="style-tile"/>
            <LineFrom sectionTitle="final prototype" sectionDescription={[`Click here to view the final interactive prototype.`]} 
                maxW={'61%'} link={`https://xd.adobe.com/view/6c4a9ecc-046e-4037-7cd4-5d0f7cadfac8-1a7b/?fullscreen`}/>
            </div>
        </div>
    );
};

export default Wandr;