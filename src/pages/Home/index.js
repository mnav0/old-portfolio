import React from 'react';
import DesignHover from '../../components/DesignHover';
import DevelopHover from '../../components/DevelopHover';
import ArtsHover from '../../components/ArtsHover';
import './styles.css';

const Home = () => {
    return (
        <div className="intro-statement">A <DesignHover></DesignHover> and <DevelopHover></DevelopHover> with a background in <ArtsHover></ArtsHover>.</div>
        
    );
};

export default Home;