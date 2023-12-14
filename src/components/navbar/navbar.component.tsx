import { NavLink } from 'react-router-dom';

import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navbar__navLink" to="/">
                <img src="../src/assets/images/logo.svg" alt="Page Logo" className="navbar__logo" />
            </NavLink>
            <ul className="navbar__navLinkList">
                <li>
                    <NavLink to="/shopping" className="navbar__navLink">
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categories" className="navbar__navLink">
                        Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar__navLink">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
