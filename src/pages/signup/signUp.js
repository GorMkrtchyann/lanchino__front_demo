import Logo from "../../assets/images/logos/logo_black.svg"
import clock1 from "../../assets/images/signup/leftClock.png"
import clock2 from "../../assets/images/signup/rightClock.png"
import {useForm} from "react-hook-form";
import {Alert, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {
    IconCircleCheck,
    IconCircleCheckFilled,
} from "@tabler/icons-react";
import {Button} from "../../components/button";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useNavigate} from "react-router";
import axios from "axios";
import {backApi} from "../../utils/sortVars";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {userInfoController} from "../../store/user/user.actions";

export const SignUp = () => {
    const {handleSubmit, register} = useForm()
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [gander, setGander] = useState(null)
    const matches = useMediaQuery('(max-width: 460px)');
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies([btoa('authToken')]);
    const dispatch = useDispatch()

    const Submit = (data) => {
        if (data.password.length < 8){
            setError('Password length must be 8 simbols.')
            setTimeout(() => setError(false), 4000)
            return
        }
        if (!gander){
            setError('Please chouse your gander.')
            setTimeout(() => setError(false), 4000)
            return
        }

        setLoader(true)

        axios.post(backApi + btoa('users/signup'), [btoa(JSON.stringify({
            ...data, gander: gander
        }))]).then(r => {
            setLoader(false)
            const data = JSON.parse(atob(r.data))
            if (!data.error){
                removeCookie(btoa('authToken'))
                setCookie(btoa('authToken'), data.token)
                dispatch(userInfoController(data.payload))
                navigate('/')
            }else{
                setServerError(data.error)
                setTimeout(() => setServerError(false), 7000)
            }
        })
    }

    useEffect(() => {
        document.title = `Rolleno / Sign Up`
    })

    return(
        <div className={'signUp'}>
            <div className={'signUp__left'}>
                <img src={Logo} alt="logo rolleno" onClick={() => navigate('/')}/>
                <img src={clock1} alt="clock"/>
            </div>

            <div className={'signUp__middle'}>
                <h1>Sign Up</h1>
                <p style={{marginBottom: 10, textAlign: "center"}}>Please fill in the fields in Latin letters.</p>
                <form onSubmit={handleSubmit(Submit)}>
                    <div>
                        <TextField id="name-basic1" inputProps={{pattern: "^[a-zA-Z]+$"}} fullWidth label="Name" variant="standard" required {...register('name')}/>
                        <TextField id="name-basic2" inputProps={{pattern: "^[a-zA-Z]+$"}} fullWidth label="Surname" variant="standard" required {...register('surname')}/>
                        <TextField id="name-basic3" fullWidth label="Phone" variant="standard" required {...register('phone')}/>
                        <TextField id="name-basic4" fullWidth label="Email" type={'email'} variant="standard" required {...register('email')}/>
                    </div>

                    <div>
                        <TextField id="name-basic5" fullWidth label="Password"
                                   autoComplete={'new-password'} type={'password'}
                                   variant="standard" required
                                   inputProps={{pattern: "^[a-zA-Z0-9_.-]*$"}}
                                   {...register('password')}
                        />
                        <TextField id="name-basic6" inputProps={{pattern: "^[a-zA-Z0-9_.-]*$"}} fullWidth label="Address" variant="standard" required {...register('address')}/>
                        <TextField id="name-basic7" fullWidth InputLabelProps={{ shrink: true }}  label="Date of Birth" type={'date'} variant="standard" required {...register('dateOfBirth')}/>

                        <FormControl required>
                            <FormLabel id="demo-controlled-radio-buttons-group">Gander</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                onChange={e => setGander(e.target.value)}
                                style={{flexDirection: "row"}}
                            >
                                <FormControlLabel value={'male'} control={
                                    <Radio
                                        icon={<IconCircleCheck color={'#D9D9D9'} />}
                                        checkedIcon={<IconCircleCheckFilled color={'#DD9964'} />}
                                    />
                                } label="Male"/>
                                <FormControlLabel value={'female'} control={
                                    <Radio
                                        icon={<IconCircleCheck color={'#D9D9D9'} />}
                                        checkedIcon={<IconCircleCheckFilled color={'#DD9964'} />}
                                    />
                                } label="Female"/>
                            </RadioGroup>
                        </FormControl>


                        {
                            error ?
                                <Alert severity="error">{error}</Alert>
                                :
                                null
                        }
                        <Button variant={'border'} text={'sign up'} loading={loader}/>
                    </div>
                </form>

                {
                    serverError ?
                        <Alert severity="error" style={{marginTop: 15}}>{serverError}</Alert> : null
                }
                {
                    matches ?
                        <p className={'bottomText'}>Already have an account? <Link to={'/login'}>Login</Link></p>
                        :
                        null
                }
            </div>

            <div className={'signUp__right'}>
                <img src={clock2} alt="clock"/>
            </div>

            {
                !matches ?
                    <p className={'bottomText'}>Already have an account? <Link to={'/login'}>Login</Link></p>
                    :
                    null
            }
        </div>
    )
}