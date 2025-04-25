import facebook from '../assets/images/footer/facebook.svg';
import instagram from '../assets/images/footer/instagram.svg';
import googlePlay from '../assets/images/footer/googlePlay.svg';
import appStore from '../assets/images/footer/appStore.svg';
import {Link} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Images} from "../assets/images/images";

export const Footer = () => {
    const matches = useMediaQuery('(max-width: 960px)');

    return (
        <div className={'footer__cont'}>
            <div className="container">
                <div className={'top__side'}>
                    <div className="left">
                        <div className="footer__logo">
                            <img src={Images.GreenLogo} alt="logo"/>
                            <p>Our service is the best and the most beautiful of all!</p>
                        </div>
                        {!matches ? <div className="social__media">
                            <p>We are on social media networks</p>
                            <div>
                                <Link to={'https://www.facebook.com'}><img src={facebook} alt="facebook"/></Link>
                                <Link to={'https://www.instagram.com'}><img src={instagram} alt="instagram"/></Link>
                            </div>
                        </div> : null}
                    </div>
                    <div className="center">
                        <div className={'links__box'}>
                            <div className={'footer__title'}>
                                <p>Our service</p>
                            </div>
                            <div className={'circle'}/>
                            <div className={'footer__links'}>
                                <Link to={'/infos/about'}>Menu</Link>
                                <Link to={'/infos/contacts'}>Best Sell</Link>
                                <Link to={'/watchStore'}>New Products</Link>
                                <Link to={'/jewelryStore'}>Contact</Link>
                            </div>
                        </div>
                        <div className={'links__box'}>
                            <div className={'footer__title'}>
                                <p>Buyer assistance</p>
                            </div>
                            <div className={'circle'}/>
                            <div className={'footer__links'}>
                                <Link to={'/infos/howWeWorking'}>How we are working</Link>
                                <Link to={'/infos/deliveryZones'}>Delivery zones</Link>
                                <Link to={'/infos/faq'}>FAQ</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="contacts">
                            <p className={'phone'}>+374 (93) 654-321</p>
                            <a href={'mailto:'}>Feedback</a>
                            <p className={'text'}>Receiving calls and processing applications around the clock.</p>
                        </div>
                        {matches ? <div className="social__media">
                            <p>We are on social media networks</p>
                            <div>
                                <a href={'https://www.facebook.com/rrolleno'} target={'_blank'}><img src={facebook} alt="facebook"/></a>
                                <a href={'https://www.instagram.com/rolleno_/'} target={'_blank'}><img src={instagram} alt="instagram"/></a>
                            </div>
                        </div> : null}
                        <div className="apps">
                            <p>Download our app</p>
                            <div>
                                <img src={googlePlay} alt="google play"/>
                                <img src={appStore} alt="app store"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom__side">
                <p>© {new Date().getFullYear()}. Lanchino. All rights reserved</p>
            </div>
        </div>
    );
}