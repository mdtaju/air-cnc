import { Button } from '@material-ui/core';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../images/logo.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar_header sticky-top'>
             <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to='/'><img src={Logo} alt="Air-cnc"/> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/home-rules'>Host your home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/search'>Host your experience</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Help</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/sign-up'>Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/sign-up'>
                                    <Button className='rounded-pill sign_up_btn' variant='contained'>Sign up</Button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;