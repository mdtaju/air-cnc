import { Button } from '@material-ui/core';
import React from 'react';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import GoogleMap from '../GoogleMap/GoogleMap';
import { Link } from 'react-router-dom';

const SearchPageMap = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className='searchResult_main_aria'>
                            <p>252 Guests</p>
                            <h5>Stay in Chittagong division</h5>
                            <div className="searchResult_btn_aria">
                                <Button variant='outlined' className='searchResult_btn'>Cancellation flexibility</Button>
                                <Button variant='outlined' className='searchResult_btn'>Type of place</Button>
                                <Button variant='outlined' className='searchResult_btn'>Price</Button>
                                <Button variant='outlined' className='searchResult_btn'>Instant Book</Button>
                                <Button variant='outlined' className='searchResult_btn'>More Filters</Button>
                            </div>

                            
                            <div className="searchResult_card align-items-center">
                                <div className="searchResult_card_img searchResult_card_img_1">
                                </div>
                                <div className="searchResult_card_title_aria">
                                    <Link to='/details'><h6>Light bright airy stylish apt & safe peaceful stay</h6></Link>
                                    <p className='card_p_1'>4 guests 2 bedrooms 2 beds 2 baths</p>
                                    <p>Wifi Air conditioning Kitchen</p>
                                    <p className='card_p_1'>Cancellation flexibility available</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className='d-flex justify-content-between align-items-center'><GradeRoundedIcon className='card_star_icon' /> <h6 className='card_p_1'>4.0 (20)</h6></div>
                                        <div><h6 className='card_p_1'>$34/night</h6><p className='card_p_1'>$169 total</p></div>
                                    </div>
                                </div>
                            </div>


                            <div className="searchResult_card align-items-center">
                                <div className="searchResult_card_img searchResult_card_img_2">
                                </div>
                                <div className="searchResult_card_title_aria">
                                    <Link to='/details'><h6>Apartment in Lost Panorama</h6></Link>
                                    <p className='card_p_1'>4 guests 2 bedrooms 2 beds 2 baths</p>
                                    <p>Wifi Air conditioning Kitchen</p>
                                    <p className='card_p_1'>Cancellation flexibility available</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className='d-flex justify-content-between align-items-center'><GradeRoundedIcon className='card_star_icon' /> <h6 className='card_p_1'>4.8 (10)</h6></div>
                                        <div><h6 className='card_p_1'>$52/night</h6><p className='card_p_1'>$169 total</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="searchResult_card align-items-center">
                                <div className="searchResult_card_img searchResult_card_img_3">
                                </div>
                                <div className="searchResult_card_title_aria">
                                    <Link to='/details'><h6>AR Lounge & Pool (r&r + b&b)</h6></Link>
                                    <p className='card_p_1'>4 guests 2 bedrooms 2 beds 2 baths</p>
                                    <p>Wifi Air conditioning Kitchen</p>
                                    <p className='card_p_1'>Cancellation flexibility available</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className='d-flex justify-content-between align-items-center'><GradeRoundedIcon className='card_star_icon' /> <h6 className='card_p_1'>4.9 (25)</h6></div>
                                        <div><h6 className='card_p_1'>$44/night</h6><p className='card_p_1'>$169 total</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div>
                            <GoogleMap />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchPageMap;