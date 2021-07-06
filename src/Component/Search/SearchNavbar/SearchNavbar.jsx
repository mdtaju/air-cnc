import React from 'react';
import { Button } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';

const SearchNavbar = () => {
    return (
        <>
        <div className='navbar_header sticky-top'>
             <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand" to='/'><img src={Logo} alt="Air-cnc"/> </Link>

                    <div className="searchPage_searchAria">
                        <div className="searchAria_input_text">
                            <input type="text" defaultValue='Chittagong Division' readOnly/>
                        </div>
                        <div className="searchAria_input_text">
                            <input type="text" defaultValue='Apr 13-17' readOnly/>
                        </div>
                        <div className="searchAria_text">
                            <h6>3 Guests</h6> <SearchIcon className='searchPage_searchIcon' />
                        </div>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse searchPage_navbar_collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Help</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Log in</NavLink>
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
        <div className="searchPage_searchAria_nav_outside_container">
            <div className="searchPage_searchAria_nav_outside">
                <div className="searchAria_input_text searchAria_input_text_outside">
                    <input type="text"/>
                </div>
                <div className="searchAria_input_text searchAria_input_text_outside">
                    <input type="text" value='Apr 13-17'/>
                </div>
                <div className="searchAria_text searchAria_text_outside">
                    <h6>3 Guests</h6> <SearchIcon className='searchPage_searchIcon' />
                </div>
            </div>
        </div>
        </>
    );
};

export default SearchNavbar;