import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class NavBar extends Component 
{   state=
    {
        isOpen:false
    };
    toggleHaandler = () =>
    {
        this.setState({isOpen:!this.state.isOpen});
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center"></div>
                <div className="nav-header"></div>
                <NavLink to="/">
                    <img src={logo} alt="Beach Resort Logo"/>
                </NavLink>  
                <NavLink to="rooms" />
            </nav>
        )
    }
}
