import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to='/'>
                    <img src="/src/media/logo.9a3d2645.svg" alt="" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
