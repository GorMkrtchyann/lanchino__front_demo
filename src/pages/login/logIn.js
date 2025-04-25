import React, {useEffect, useState} from 'react';
import {Alert, TextField} from "@mui/material";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {
    IconCircleCheck,
    IconCircleCheckFilled,
} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


export const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const [loginType, setLoginType] = useState('phone');
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 4000)
    }, [error])


    const handleChange = (e) => {
        setLoginType(e.target.value);
    }


    return (
        <div className={'login-container'}>
            <div className="form-cont">
                <div className="login-form">
                    <h1 className="logo-title"><span>L</span>ogin</h1>
                    <form onSubmit={handleSubmit()}>
                        <div>
                            <p>Email Or Phone</p>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="phone"
                                onChange={handleChange}
                                name="radio-buttons-group"
                                style={{flexDirection: "row"}}
                            >
                                <FormControlLabel value={'phone'} control={
                                    <Radio
                                        icon={<IconCircleCheck color={'#58D22D'} />}
                                        checkedIcon={<IconCircleCheckFilled color={'#58D22D'} />}
                                    />
                                } label="Phone" />
                                <FormControlLabel value={'email'} control={
                                    <Radio
                                        icon={<IconCircleCheck color={'#58D22D'} />}
                                        checkedIcon={<IconCircleCheckFilled color={'#58D22D'} />}
                                    />
                                } label="Email" />
                            </RadioGroup>
                        </div>
                        <div>
                            <TextField {...register(loginType)} id="standard-basic" label={loginType.slice(0, 1).toUpperCase()+loginType.slice(1)} variant="standard" style={{width: '100%'}}/>
                        </div>
                        <div>
                            <TextField {...register('password')} id="standard-basic" type={'password'} label="Password" variant="standard" style={{width: '100%'}}/>
                        </div>
                        {error ? <Alert severity="error">Please fill in all fields!</Alert> : null}
                        <div className={'btn-box'}>
                            <button>Login</button>
                        </div>

                        {/*{*/}
                        {/*    serverError ?*/}
                        {/*        <Alert severity="error" style={{marginTop: 15}}>{serverError}</Alert> : null*/}
                        {/*}*/}
                    </form>
                </div>
            </div>
            <p className={'bottom-content'}>Not Registered Yet? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
    );
}