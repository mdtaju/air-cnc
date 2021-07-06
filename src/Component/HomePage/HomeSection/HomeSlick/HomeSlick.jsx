import React from 'react';
import Ex1 from '../../../../images/experience-1.jpg';
import Ex2 from '../../../../images/experience-2.jpg';
import Ex3 from '../../../../images/experience-3.jpg';
import Ex4 from '../../../../images/experience-4.jpg';
import Ho1 from '../../../../images/home-1.jpg';
import Ho2 from '../../../../images/home-2.jpg';
import Ho3 from '../../../../images/home-3.jpg';
import Ho4 from '../../../../images/home-4.jpg';
import Ho5 from '../../../../images/home-5.jpg';
import Ho6 from '../../../../images/home-6.jpg';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import Slider from "react-slick";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  root: {
    width: '100%',
    boxShadow: 'none !important'
  },
});

const HomeSlick = () => {
    const classes = useStyles();
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        nextArrow: <NavigateNextIcon />,
        prevArrow: <NavigateBeforeIcon />
    };

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center home_experience_header'>
                <h4>Experiences</h4>
                <Link to='/'>See all &#62;</Link>
            </div>
            <div className="row experience_aria_overflow">
                <div className="col-lg-3 col-md-6 col-sm-12 home_experiences_aria">
                    <div className="home_experiences_card">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Experience"
                                height="140"
                                image={Ex1}
                                title="Experience"
                                />
                                <CardContent className='home_card_body'>
                                    <Typography gutterBottom variant="overline" component="p">
                                        NIGHTLIFE-NEW YOrk
                                    </Typography>
                                    <h6>Discover the city's party scene</h6>
                                    <p>$35 Per Person</p>
                                    <div className="d-flex align-items-center">
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        &nbsp;&nbsp;64
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 home_experiences_aria">
                    <div className="home_experiences_card">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Experience"
                                height="140"
                                image={Ex2}
                                title="Experience"
                                />
                                <CardContent className='home_card_body'>
                                    <Typography gutterBottom variant="overline" component="p">
                                        entertainment-London
                                    </Typography>
                                    <h6>Tour with an Enthusiastic Local!</h6>
                                    <p>$3 Per Person</p>
                                    <div className="d-flex align-items-center">
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        &nbsp;&nbsp;1
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 home_experiences_aria">
                    <div className="home_experiences_card">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Experience"
                                height="140"
                                image={Ex3}
                                title="Experience"
                                />
                                <CardContent className='home_card_body'>
                                    <Typography gutterBottom variant="overline" component="p">
                                        photoclass-los angeles
                                    </Typography>
                                    <h6>Must Have L.A Pictures!</h6>
                                    <p>$39 Per Person</p>
                                    <div className="d-flex align-items-center">
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        &nbsp;&nbsp;179
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 home_experiences_aria">
                    <div className="home_experiences_card">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Experience"
                                height="140"
                                image={Ex4}
                                title="Experience"
                                />
                                <CardContent className='home_card_body'>
                                    <Typography gutterBottom variant="overline" component="p">
                                        photography-NEW YOrk
                                    </Typography>
                                    <h6>Retro PhotoShoot in NYC</h6>
                                    <p>$49 Per Person</p>
                                    <div className="d-flex align-items-center">
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        &nbsp;&nbsp;72
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center home_experience_header'>
                <h4>Homes</h4>
                <Link to='/'>See all &#62;</Link>
            </div>
            <Slider {...settings}>
                <div className="slick_item">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={Ho1}
                            title="Contemplative Reptile"
                            />
                            <CardContent className='home_card_body'>
                                <Typography gutterBottom variant="overline" component="p">
                                    photography-NEW YOrk
                                </Typography>
                                <h6>Unique Cob Cottage</h6>
                                <p>$128 Per Person</p>
                                <div className="d-flex align-items-center">
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    &nbsp;&nbsp;284
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="slick_item">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={Ho2}
                            title="Contemplative Reptile"
                            />
                            <CardContent className='home_card_body'>
                                <Typography gutterBottom variant="overline" component="p">
                                    photography-NEW YOrk
                                </Typography>
                                <h6>The Joshua Tree House</h6>
                                <p>$250 Per Person</p>
                                <div className="d-flex align-items-center">
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    &nbsp;&nbsp;269
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="slick_item">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={Ho3}
                            title="Contemplative Reptile"
                            />
                            <CardContent className='home_card_body'>
                                <Typography gutterBottom variant="overline" component="p">
                                    photography-NEW YOrk
                                </Typography>
                                <h6>A Pirate's Life For Me-Houseboat!</h6>
                                <p>$209 Per Person</p>
                                <div className="d-flex align-items-center">
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    &nbsp;&nbsp;140
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="slick_item">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={Ho4}
                            title="Contemplative Reptile"
                            />
                            <CardContent className='home_card_body'>
                                <Typography gutterBottom variant="overline" component="p">
                                    photography-NEW YOrk
                                </Typography>
                                <h6>Retro PhotoShoot in NYC</h6>
                                <p>$49 Per Person</p>
                                <div className="d-flex align-items-center">
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    &nbsp;&nbsp;72
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="slick_item">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={Ho5}
                            title="Contemplative Reptile"
                            />
                            <CardContent className='home_card_body'>
                                <Typography gutterBottom variant="overline" component="p">
                                    photography-NEW YOrk
                                </Typography>
                                <h6>Retro PhotoShoot in NYC</h6>
                                <p>$49 Per Person</p>
                                <div className="d-flex align-items-center">
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    <GradeRoundedIcon className='rating_star' />
                                    &nbsp;&nbsp;72
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="slick_item">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={Ho6}
                                title="Contemplative Reptile"
                                />
                                <CardContent className='home_card_body'>
                                    <Typography gutterBottom variant="overline" component="p">
                                        photography-NEW YOrk
                                    </Typography>
                                    <h6>Retro PhotoShoot in NYC</h6>
                                    <p>$49 Per Person</p>
                                    <div className="d-flex align-items-center">
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        <GradeRoundedIcon className='rating_star' />
                                        &nbsp;&nbsp;72
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
            </Slider>
        </div>
    );
};

export default HomeSlick;