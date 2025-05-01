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

import bonusPhone from '../../assets/images/phone.svg'
import bonusPhoneBg from '../../assets/images/phone_bg.svg'

import {IconX, IconLogin2, IconChevronLeft, IconChevronRight} from '@tabler/icons-react'
import {Footer} from "../../components/footer";
import {Card} from "../../components/card";
import {useRef} from "react";



export const Home = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate()


    return(
        <div className="home">
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

                <div className="info_block">
                    <h2>See what advantages we have!</h2>

                    <div className="info_block__box">
                        <div className="info_block__box__item">
                            <img src={infoFood} alt="food"/>
                            <p>Diverse and delicious foods that won't leave you hungry</p>
                        </div>
                        <span/>
                        <div className="info_block__box__item">
                            <img src={infoFast} alt="food"/>
                            <p>You will receive fast service and will not be late for your work</p>
                        </div>
                        <span/>
                        <div className="info_block__box__item">
                            <img src={infoHome} alt="food"/>
                            <p>You will feel as comfortable as at home here</p>
                        </div>
                        <span/>
                        <div className="info_block__box__item">
                            <img src={infoDelivery} alt="food"/>
                            <p>You can order and receive your order very quickly</p>
                        </div>
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

                <div className="bonus_info">

                    <div className="bonus_info__box">
                        <img src={bonusPhone} alt="bonus phone"/>
                        <div className="bonus_info__box__text">
                            <h2>Open Bonus Card</h2>
                            <p>Create an account with us and get a BONUS CARD that will accumulate bonuses after every purchase.</p>
                            <Link to={''}><IconLogin2/> Sign In For Open</Link>
                        </div>
                    </div>
                    <div className="bonus_info__bg">

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}