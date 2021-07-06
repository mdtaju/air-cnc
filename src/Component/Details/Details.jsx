import React from 'react';
import ImgAtr from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import Avatar from '@material-ui/core/Avatar';
import HomeImg from '../../images/home.png';
import CheckMark from '../../images/checkmark-square-2.png';
import Sparkling from '../../images/solid.png';
import SingleAvatar from '../../images/single-01.png';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Button } from '@material-ui/core';
import './Details.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '95%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const Details = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };


    return (
        <>
            <section className="details_img_section">
                <div className="details_aria_img details_aria_img_1">

                </div>
                <div className="details_aria_img details_aria_img_2">

                </div>
            </section>
            <section className="details_description_aria">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div><h3>Light bright airy stylish apt & safe peaceful stay</h3></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <div className='Author_img'><Avatar alt="Remy Sharp" src={ImgAtr} /><span>Rowdra</span></div>
                                        </div>
                                    </div>
                                </div>
                                <p className='details_info'>Chittagong Bangladesh</p>
                                <p className='details_info details_room_info'>4 guests &nbsp; 2 bedrooms &nbsp; 2 beds &nbsp;  2 baths</p>
                                <div className="d-flex">
                                    <div className="details_rules_img"><img src={HomeImg} alt=""/></div>
                                    <div className="details_rules_point"><p className='details_info details_info_01'>Entire Home</p><p className="details_info details_info_02">You'll have the condominium to yourself.</p> </div>
                                </div>
                                <div className="d-flex">
                                    <div className="details_rules_img"><img src={CheckMark} alt=""/></div>
                                    <div className="details_rules_point"><p className='details_info details_info_01'>Self check-in</p><p className="details_info details_info_02">You can check in with the doorman.</p> </div>
                                </div>
                                <div className="d-flex">
                                    <div className="details_rules_img"><img src={Sparkling} alt=""/></div>
                                    <div className="details_rules_point"><p className='details_info details_info_01'>Sparkling clean</p><p className="details_info details_info_02">10 recent guests said this place was sparkling clean.</p> </div>
                                </div>
                                <div className="d-flex details_info_02_last">
                                    <div className="details_rules_img"><img src={SingleAvatar} alt=""/></div>
                                    <div className="details_rules_point"><p className='details_info details_info_01'>Rowdra is a Superhost</p><p className="details_info details_info_02">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p> </div>
                                </div>
                                <div>
                                    <p className='details_info'>It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright looks comfortable stay.</p>
                                    <p className='details_info'>Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm. It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free.</p>
                                    <p className='details_info'>You'll love my place for its lovely and bright looks comfortable stay.</p>
                                    <p className="details_info">Bangladesh is a beauty with it's six seasons and green. The people are hospitable and worm.</p>
                                    <Link to='/details'>Read more about the space</Link><br/>
                                    <p className='details_review_line'>Reviews</p>
                                    <GradeRoundedIcon className='card_star_icon' /> &nbsp; <span>4.9 (20 reviews)</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='details_pricing_main_aria'>
                                <h4>$34/night</h4>
                                <GradeRoundedIcon className='card_star_icon' /> &nbsp; <span>4.9 (20 reviews)</span><br/><br/>
                                <span>Dates</span>
                                <div className="dates_main_aria d-flex justify-content-around">4/13/20 <ArrowForwardIcon /> 7/13/20</div><br/>
                                <span>Guests</span>
                                <div className="dates_main_aria">
                                    <FormControl className={classes.formControl}>
                                        <NativeSelect
                                        value={state.age}
                                        onChange={handleChange}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-native-label-placeholder',
                                        }}
                                        >
                                        <option value="">1 guests</option>
                                        <option value={10}>2 guests</option>
                                        <option value={20}>3 guests</option>
                                        <option value={30}>4 guests</option>
                                        </NativeSelect>
                                    </FormControl>
                                </div>
                                <div className="details_main_aria details_price_counting d-flex justify-content-between"><span>$34 x 4 night</span><span>$136</span></div>
                                <div className="details_main_aria details_price_counting d-flex justify-content-between"><span>Cleaning fee</span><span>$10</span></div>
                                <div className="details_main_aria details_price_counting d-flex justify-content-between"><span>Service fee</span><span>$21</span></div>
                                <div className="details_main_aria details_price_counting details_price_counting_last_line d-flex justify-content-between"><span>Total</span><span>$167</span></div>
                                <Link to='/home-rules' className='home_search_btn_link'><Button variant='outlined' className='home_search_btn'>Reserve</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;