import {Navigation} from "../../components/navigation";
import Slider from "react-slick";
import {Link, useNavigate} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import drinksGif from '../../assets/gifs/cold-drink.gif'
import coffeeGif from '../../assets/gifs/coffee-cup.gif'
import fastFood from '../../assets/gifs/french-fries.gif'
import food from '../../assets/gifs/tikka-masala.gif'
import dessert from '../../assets/gifs/donut.gif'

import infoFood from '../../assets/gifs/food.gif'
import infoDelivery from '../../assets/gifs/delivery.gif'
import infoHome from '../../assets/gifs/home.gif'
import infoFast from '../../assets/gifs/fast.gif'

import bonusCard from '../../assets/images/bonus_card.svg'
import bonusPhoneBg from '../../assets/images/phone_bg.svg'

import {IconX, IconLogin2, IconChevronLeft, IconChevronRight, IconCopy, IconQrcode, IconSquareRoundedCheck} from '@tabler/icons-react'
import {Footer} from "../../components/footer";
import {Card} from "../../components/card";
import {useRef, useState} from "react";

import LinearProgress from '@mui/material/LinearProgress';
import {Popup} from "../../components/popup";

import QRCode from "react-qr-code";


export const HomeUser = () => {
    const scrollRef = useRef(null);
    const [openQR, setOpenQR] = useState(false);
    const [copyRef, setCopyRef] = useState(false);
    const navigate = useNavigate()

    const refUrl = 'https//lanchino.am/signup?ref=342423'

    const copyText = () => {
        navigator.clipboard.writeText(refUrl)
        setCopyRef(true)
        setTimeout(() => {
            setCopyRef(false);
        }, 1500)
    }

    return(
        <div className="home user_home">
            <Navigation/>

            <div className="container">
                <div className="home__slider">
                    <Carousel
                        centerMode={true}
                        infinite={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        stopOnHover={true}
                    >
                        <div className="home__slider__slide">
                            <Link to={'/'}>
                                <img
                                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/800369181465817.651c7ced25b92.jpg"
                                    alt=""/>
                            </Link>
                        </div>
                        <div className="home__slider__slide">
                            <Link to={'/'}>
                                <img
                                    src="https://wallpaperaccess.com/full/4691013.jpg"
                                    alt=""/>
                            </Link>
                        </div>
                        <div className="home__slider__slide">
                            <Link to={'/'}>
                                <img
                                    src="https://cdn.dribbble.com/userupload/12540518/file/original-350cb3341f2f875dd7aab47344e0b5c4.jpg?resize=1000x1000"
                                    alt=""/>
                            </Link>
                        </div>
                        <div className="home__slider__slide">
                            <Link to={'/'}>
                                <img
                                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/800369181465817.651c7ced25b92.jpg"
                                    alt=""/>
                            </Link>
                        </div>
                        <div className="home__slider__slide">
                            <Link to={'/'}>
                                <img
                                    src="https://wallpaperaccess.com/full/4691013.jpg"
                                    alt=""/>
                            </Link>
                        </div>
                        <div className="home__slider__slide">
                            <Link to={'/'}>
                                <img
                                    src="https://cdn.dribbble.com/userupload/12540518/file/original-350cb3341f2f875dd7aab47344e0b5c4.jpg?resize=1000x1000"
                                    alt=""/>
                            </Link>
                        </div>
                    </Carousel>
                </div>

                <div className="category">
                    <h2>Choose a category and make purchases!</h2>

                    <div className="category__box">
                        <div className="category__box__item" onClick={() => navigate('/store/cold-drinks')}>
                            <div className="category__box__item__img">
                                <img src={drinksGif} alt=""/>
                            </div>
                            <p>Drinks</p>
                        </div>

                        <div className="category__box__item" onClick={() => navigate('/store/fast-food')}>
                            <div className="category__box__item__img">
                                <img src={fastFood} alt=""/>
                                {/*<img src={coffeeGif} alt=""/>*/}
                            </div>
                            <p>Fast Food</p>
                        </div>

                        <div className="category__box__item" onClick={() => navigate('/store/desserts')}>
                            <div className="category__box__item__img">
                                <img src={dessert} alt=""/>
                                {/*<img src={coffeeGif} alt=""/>*/}
                            </div>
                            <p>Dessert</p>
                        </div>

                        <div className="category__box__item" onClick={() => navigate('/store/hot-food')}>
                            <div className="category__box__item__img">
                                <img src={food} alt=""/>
                                {/*<img src={coffeeGif} alt=""/>*/}
                            </div>
                            <p>Food</p>
                        </div>

                        <div className="category__box__item" onClick={() => navigate('/store/hot-drinks')}>
                            <div className="category__box__item__img">
                                <img src={coffeeGif} alt=""/>
                            </div>
                            <p>Tea & Coffee</p>
                        </div>
                    </div>
                </div>

                {
                    openQR ?
                        <Popup content={
                            <div className={'referral_qr'}>
                                <h3>Your referral QR code</h3>
                                <QRCode className={'referral_qr__qr'} value={refUrl}/>
                            </div>
                        } closeBtn={() => setOpenQR(false)}/>
                        : null
                }
                <div className="bonus">
                    <div className="bonus__card">
                        <b className={'id'}>423425</b>
                        <p>Bonus Card</p>
                        <img className={'barcode'} src='https://pngimg.com/uploads/barcode/barcode_PNG4.png' alt=""/>
                        <img className={'cardb'} src={bonusCard} alt="bonus card"/>
                    </div>
                    <div className="bonus__content">
                        <ul>
                            <li>Card Bonus <span>340</span></li>
                            <li>Referral Bonus <span>20</span></li>
                            <li>Your shops <span>3500</span></li>
                        </ul>
                        <LinearProgress variant="determinate" value={30}/>
                        <div className="bonus__content__prices">
                            <span>3500 AMD</span>
                            <span>20000 AMD</span>
                        </div>

                        <div className="bonus__referral">
                            <p>{refUrl}</p>
                            {
                                !copyRef ?
                                    <IconCopy onClick={copyText}/>
                                    :
                                    <IconSquareRoundedCheck/>

                            }
                            <IconQrcode onClick={() => setOpenQR(true)}/>
                        </div>
                        {/*<p>You can open referral link and get bonuses your referrals</p>*/}
                        {/*<button>Open Referral Link</button>*/}
                    </div>
                </div>

                <div className="quick_menu">
                    <h2>Quick Choose!</h2>

                    <div className={'quick_menu__box__arrows'}>
                        <IconChevronLeft className={'arrow left'} onClick={() => scrollRef.current.scrollBy(-270, 0)}/>
                        <IconChevronRight className={'arrow right'} onClick={() => scrollRef.current.scrollBy(270, 0)}/>
                    </div>
                    <div className="quick_menu__box" ref={scrollRef}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}