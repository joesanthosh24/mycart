import React from 'react';
import App_module from '../../App.module.scss';
import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__navLink">Home</a>
            <ul className="navbar__navLinkList">
                <li>
                    <a href="" className="navbar__navLink">Shop</a>
                </li>
                <li>
                    <a href="" className="navbar__navLink">Categories</a>
                </li>
                <li>
                    <a href="" className="navbar__navLink">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
