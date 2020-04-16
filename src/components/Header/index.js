import React from 'react';
import './styles.css';



const Header = ( aboutLink ) => {
    return (
        <div className={"header"}>
            <img src={require("../../assets/logo.png")} className = "header-logo" alt="MN logo"/>
            <a href={aboutLink} className = "header-name">magdalena navracruz</a>
            <div className="line">
            </div>
        </div>
    );
};

export default Header;