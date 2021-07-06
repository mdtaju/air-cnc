import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import './SignUp.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '90%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const SignUp = () => {

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

    const [HaveAccount, setHaveAccount] = useState(true);

    console.log(HaveAccount)

    return (
        <section className='container'>
            <div className="signUp_main_container">
                {
                    HaveAccount === true ?
                    <>
                        <h3>Log in</h3>
                        <form action="">
                            <div className="login_country_input_main_aria">
                                <FormControl className={classes.formControl}>
                                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                                    Country/ Region
                                    </InputLabel>
                                    <NativeSelect
                                    value={state.age}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-label-placeholder',
                                    }}
                                    >
                                    <option value="">Bangladesh</option>
                                    <option value={10}>Arab</option>
                                    <option value={20}>China</option>
                                    <option value={30}>Pakistan</option>
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div className="login_phone_input_main_aria">
                                <input type="tel" name="" id="loginPhoneInput" placeholder='Phone Number'/>
                            </div>
                            <p className='signUp_p'>We'll call or text you to confirm your number. Standard message and data rates apply.</p>
                            <Button variant='contained' className='logIn_continue_btn'>Continue</Button>
                        </form>
                        <p className='logIn_condition_p' onClick={() => setHaveAccount(false)}>Don't have an account? <b>Sign up</b></p>
                    </> : 
                    <> 
                        <h3>Sign up</h3>
                        <form action="">
                            <div className="login_phone_input_main_aria signUp_name_input">
                                <input type="text" name="" id="loginPhoneInput" placeholder='Your full name' required/>
                            </div>
                            <div className="login_phone_input_main_aria">
                                <input type="email" name="" id="loginPhoneInput" placeholder='Your Email'/>
                            </div>
                            <div className="login_country_input_main_aria signUp_country_input">
                                <FormControl className={classes.formControl}>
                                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                                    Country/ Region
                                    </InputLabel>
                                    <NativeSelect
                                    value={state.age}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-label-placeholder',
                                    }}
                                    >
                                    <option value="">Bangladesh</option>
                                    <option value={10}>Arab</option>
                                    <option value={20}>China</option>
                                    <option value={30}>Pakistan</option>
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div className="login_phone_input_main_aria">
                                <input type="tel" name="" id="loginPhoneInput" placeholder='Phone Number'/>
                            </div>
                            <p className='signUp_p'>We'll call or text you to confirm your number. Standard message and data rates apply.</p>
                            <Button variant='contained' className='logIn_continue_btn'>Continue</Button>
                        </form>
                        <p className='logIn_condition_p' onClick={() => setHaveAccount(true)}>Already have an account. <b>Sign in</b></p>
                    </>
                }
            </div>
        </section>
    );
};

export default SignUp;