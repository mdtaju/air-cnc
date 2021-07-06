import React, {useState} from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Button } from '@material-ui/core';
import ImgOne from '../../images/ic_child_friendly_48px.png';
import ImgTwo from '../../images/ic_pets_48px.png';
import ImgTree from '../../images/forbidden.png';
import ImgFour from '../../images/ic_smoking_rooms_48px.png';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import CartImg from '../../images/search-card-1.jpg';
import AvatarImg from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import Avatar from '@material-ui/core/Avatar';
import MasterCard from '../../images/credit-cards_mastercard.png';
import VisaCard from '../../images/credit-cards_visa.png';
import AmexCard from '../../images/credit-cards_amex.png';
import PayPal from '../../images/Bitmap.png';
import './Home-Rules.css';
import { useHistory } from 'react-router-dom';

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

const HomeRules = () => {
    // Review States
    const [reviewOpen, setReviewOpen] = useState(true);
    const [reviewStyled, setReviewStyled] = useState({color:'black'})
    // Continue States
    const [continueOpen, setContinueOpen] = useState(false);
    const [continueStyled, setContinueStyled] = useState({})
    // Continue to pay
    const [continueToPay, setContinueToPay] = useState(false);
    const [continueToPayStyled, setContinueToPayStyled] = useState({})
    let router = useHistory()

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
    
    // Review Handlers
    const reviewHandleNext = () => {
        setReviewOpen(false)
        setContinueOpen(true)
        setContinueStyled({color:'black'})
    }

    // continue Handlers
    const continueHandleNext = () => {
        setContinueOpen(false)
        setContinueToPay(true)
        setContinueToPayStyled({color:'black'})
    }
    const continueHandleBack = () => {
        setContinueOpen(false)
        setReviewOpen(true)
        setContinueStyled({})
    }

    // ContinueToPay Handlers
    const continueToPayHandlerNext = () => {
        setContinueToPay(false)
        router.push('/')
    }
    const continueToPayHandlerBack = () => {
        setContinueToPay(false)
        setContinueOpen(true)
        setContinueToPayStyled({})
    }

    return (
        <section className="home_rules_main_section">
            <div className='container'>
                <div className="row home_rules_row flex-column-reverse flex-lg-row">
                    <div className="col-lg-7 col-md-12">
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            <span  style={reviewStyled} color="inherit" className='breadcrumbs_item' >
                            1. Reviews house rules
                            </span>
                            <span style={continueStyled} color="inherit" className='breadcrumbs_item'>
                            2. Who's comming ?
                            </span>
                            <span style={continueToPayStyled} color="inherit" className='breadcrumbs_item'>
                            3. Confirm and pay
                            </span>
                        </Breadcrumbs>
                        <div className="breadcrumbs_details">
                            {
                                reviewOpen && 
                                <>
                                    <h3>Review House Rules</h3>
                                    <p>3 night in Dhaka</p>
                                    <div className="breadcrumbs_subDetails">
                                        <div className="breadcrumbs_subDetails_subs">
                                            <div className='breadcrumbs_subDetails_subs_1'>
                                                <p>Apr</p>
                                                <p>13</p>
                                            </div>
                                            <div className="breadcrumbs_subDetails_subs_2">
                                                <p>Monday Check-in</p>
                                                <p>After 12:00 PM</p>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div className="breadcrumbs_subDetails_subs">
                                            <div className='breadcrumbs_subDetails_subs_1'>
                                                <p>Apr</p>
                                                <p>17</p>
                                            </div>
                                            <div className="breadcrumbs_subDetails_subs_2">
                                                <p>Monday Checked</p>
                                                <p>After 11:00 AM</p>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <p>Self check-in with building staff</p><hr />
                                    <h5>Things to keep in mind</h5>
                                    <div className="breadcrumbs_icon_section">
                                        <div className='breadcrumbs_icon_area'><img src={ImgOne} alt="" /></div>
                                        <p>Suitable for children and infants</p>
                                    </div>
                                    <div className="breadcrumbs_icon_section">
                                        <div className='breadcrumbs_icon_area'><img src={ImgTwo} alt="" /></div>
                                        <p>Pets allowed</p>
                                    </div>
                                    <div className="breadcrumbs_icon_section">
                                        <div className='breadcrumbs_icon_area'><img src={ImgTree} alt="" /></div>
                                        <p>No parties or events</p>
                                    </div>
                                    <div className="breadcrumbs_icon_section">
                                        <div className='breadcrumbs_icon_area'><img src={ImgFour} alt="" /></div>
                                        <p>Smoking allowed</p>
                                    </div>
                                </>
                            }
                            {
                                continueOpen && 
                                <>
                                    <div className="breadcrumbs_subDetails breadcrumbs_subDetails_traveling">
                                        <div className="traveling_title_area">
                                            <h3>Traveling for work</h3>
                                            <p>Say hello to your host</p>
                                            <p>Let Rowdra know a little about yourself and why you're coming.</p>
                                            <textarea  className='traveling_text_area' placeholder='Hello Rowdra cant wait to spend 4 night is your home'></textarea>
                                        </div>
                                        <div className="traveling_avatar_area">
                                            <Avatar alt="Avatar" src={AvatarImg} />
                                            <span>Rowdra</span>
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                continueToPay &&
                                <>
                                    <p>Payment selection</p>
                                    <div className="bankPayment_parent_container">
                                        <div className="creditCardMainContainer">

                                            <div className="row">
                                                <div className="inputLabelAria col-lg-8 col-md-6">
                                                    <input type="radio" name="Radio" id="CreditCardInput" defaultChecked/>
                                                    <label htmlFor="CreditCardInput" className="radio__custom">Credit Cart</label>
                                                    <p className='input__information'>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express</p>
                                                </div>

                                                <div className="col-lg-4 col-md-6  d-flex justify-content-end">
                                                    <div className="creditCartImgAria">
                                                        <img src={MasterCard} alt="MasterCard"/>
                                                        <img src={VisaCard} alt="VisaCard"/>
                                                        <img src={AmexCard} alt="AmexCard"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 cardNumberContainer">
                                                    <label htmlFor="cardNumberInput" className='cardInputLabel'>CARD NUMBER</label>
                                                    <input type="text" id='cardNumberInput' placeholder='0000 0000 0000 0000' className='form-control card__input'/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-4 cardNameContainer">
                                                    <label htmlFor="cardNameInput" className='cardInputLabel'>NAME ON CARD</label>
                                                    <input type="text" name="cardName" id="cardNameInput" className='form-control card__input'/>
                                                </div>
                                                <div className="col-lg-3 col-md-4 cardNameContainer">
                                                    <label htmlFor="cardDateInput" className='cardInputLabel'>EXPIRY DATE</label>
                                                    <input type="date" name="expiryDate" id="cardDateInput" className='form-control card__input'/>
                                                </div>
                                                <div className="col-lg-3 col-md-4 cardNameContainer">
                                                    <label htmlFor="cardCVVCode" className='cardInputLabel'>CVV CODE</label>
                                                    <input type="number" name="CVVNumber" id="cardCVVCode" className='form-control card__input'/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="payPalMainContainer">
                                            <div className="row">
                                                <div className="inputLabelAria col-md-8">
                                                    <input type="radio" name="Radio" id="PayPalInput"/>
                                                    <label htmlFor="PayPalInput" className="radio__custom">PayPal</label>
                                                    <p className='input__information'>You will be redirected PayPal website to compleat your purchase securely</p>
                                                </div>
                                                <div className="col-md-4 payPalImgAria d-flex justify-content-end">
                                                    <div>
                                                    <img src={PayPal} alt="PayPal"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="breadcrumbs_btn">
                            {
                                reviewOpen &&
                                <>
                                    <Button variant='outlined' className='sign_up_btn' onClick={() => reviewHandleNext()}>Agree and continue</Button>
                                </>
                            }

                            {
                                continueOpen &&
                                <>
                                    <Button variant='contained' className='home_rules_back_btn' onClick={() => continueHandleBack()} color='default'>Back</Button>
                                    <Button variant='outlined' className='sign_up_btn' onClick={() => continueHandleNext()}>continue</Button>
                                </>
                            }
                            {
                                continueToPay &&
                                <>
                                    <Button variant='contained' className='home_rules_back_btn' onClick={() => continueToPayHandlerBack()} color='default'>Back</Button>
                                    <Button variant='outlined' className='sign_up_btn' onClick={() => continueToPayHandlerNext()}>continue to pay</Button>
                                </>
                            }

                            
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className='details_pricing_main_aria'>
                            <div className="title_main_container">
                                <div className="title_main_area">
                                    <h4>Light bright airy stylish apt and safe peaceful stay</h4>
                                    <GradeRoundedIcon className='card_star_icon' /> &nbsp; <span>4.9 (20 reviews)</span><br/><br/>
                                </div>
                                <div className="title_img_main_area">
                                    <img src={CartImg} alt="" />
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeRules;