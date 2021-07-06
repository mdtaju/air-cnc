import React, { useState } from 'react';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './HomeSection.css'
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeSlick from './HomeSlick/HomeSlick';
import { Link } from 'react-router-dom';


const HomeSection = () => {
    const [expandCard, setExpandCard] = useState(true);
    const [AdultCount, setAdultCount] = useState(1);
    const [ChildCount, setChildCount] = useState(0);
    const [BabiesCount, setBabiesCount] = useState(0);

    const AdultDecrement = () => {
        if(AdultCount > 1) {
            setAdultCount(AdultCount - 1)
        }
    };
    const ChildDecrement = () => {
        if(ChildCount > 0) {
            setChildCount(ChildCount - 1)
        }
    };
    const BabiesDecrement = () => {
        if(BabiesCount > 0) {
            setBabiesCount(BabiesCount -1)
        }
    };

    return (
        <section className='home_main_section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="home_search_main">
                            <h5>Where do you want to go</h5>
                            <div className="home_searchAria_location">
                                <h6>Location</h6>
                                <p>Add city, Landmark or Address</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className='home_searchAria_location d-flex align-items-center justify-content-between'>
                                        <div>
                                            <p>Arrival</p>
                                            <h6>24/04/2020</h6>
                                        </div>
                                        <CalendarTodayOutlinedIcon className='home_calender_icon'/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className='home_searchAria_location d-flex align-items-center justify-content-between'>
                                        <div>
                                            <p>Departure</p>
                                            <h6>29/04/2020</h6>
                                        </div>
                                        <CalendarTodayOutlinedIcon className='home_calender_icon'/>
                                    </div>
                                </div>
                            </div>

                            {/* Expand Card */}
                            <div className='home_searchAria_location'>

                                {/* Expand Header */}
                                <div className='d-flex justify-content-between align-items-center home_guest_expand'>
                                    <div>
                                        <p>Guests</p>
                                        <h6>{AdultCount} adults, {ChildCount} child</h6>
                                    </div>
                                    {
                                        expandCard === true && <IconButton onClick={() => {setExpandCard(false)}}><ExpandLessIcon /></IconButton>
                                    }
                                    {
                                        expandCard === false && <IconButton onClick={() => {setExpandCard(true)}}><ExpandMoreIcon /></IconButton>
                                    }
                                </div>

                                {/* Expand Body */}
                                {
                                    expandCard === true && 
                                    <>
                                        {/* Adult Counter */}
                                        <div className="d-flex justify-content-between align-items-center home_counter_aria">
                                            <h6>adults</h6>
                                            <div className='d-flex justify-content-between align-items-center home_counter'>
                                                <IconButton onClick={() => {AdultDecrement()}}><RemoveIcon /></IconButton>
                                                <strong>{AdultCount}</strong>
                                                <IconButton onClick={() => {setAdultCount(AdultCount + 1)}}><AddIcon /></IconButton>
                                            </div>
                                        </div>

                                        {/* Child Counter */}
                                        <div className="d-flex justify-content-between align-items-center home_counter_aria">
                                            <div>
                                                <h6>child</h6>
                                                <p>Age 2-12</p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center home_counter'>
                                                <IconButton onClick={() => {ChildDecrement()}}><RemoveIcon /></IconButton>
                                                <strong>{ChildCount}</strong>
                                                <IconButton onClick={() => {setChildCount(ChildCount + 1)}}><AddIcon /></IconButton>
                                            </div>
                                        </div>

                                        {/* Babies Counter */}
                                        <div className="d-flex justify-content-between align-items-center home_counter_aria">
                                            <div>
                                                <h6>babies</h6>
                                                <p>Younger the 2</p>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center home_counter'>
                                                <IconButton onClick={() => {BabiesDecrement()}}><RemoveIcon /></IconButton>
                                                <strong>{BabiesCount}</strong>
                                                <IconButton onClick={() => {setBabiesCount(BabiesCount + 1)}}><AddIcon /></IconButton>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end home_apply_aria">
                                            <Button variant='outlined' className='home_apply_btn'>Apply</Button>
                                        </div>
                                    </>
                                }
                            </div>
                            {/* Expand Aria End Here */}
                            <Link to='/search' className='home_search_btn_link'><Button variant='outlined' className='home_search_btn'><SearchIcon/> search</Button></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <HomeSlick />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;