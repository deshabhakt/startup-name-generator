import React from "react";

import "./Header.css";
class Header extends React.Component{
    render(){
        return (
            <div className="header-container">
                <img className="header-image" src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="header-img"></img>
                <p className="heart-icon">💕</p>
                <h1 className="head-text">Name It</h1>
            </div>
        )
    }
}

export default Header;