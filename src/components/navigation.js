import {Images} from "../assets/images/images";
import {Link, useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from "react";
import {IconX, IconMenu2} from '@tabler/icons-react'


export const Navigation = () => {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [language, setLanguage] = useState('en');
    const navigate = useNavigate()


    const [openMobMenu, setOpenMobMenu] = useState(false);

    const languageChanger = (lang) => {
        setLanguage(lang);
        setLanguageOpen(false);
    }

    return(
        <>
            <div className="navigation_top">
                <div className="container">
                    <ul>
                        <li><Link to={'/about'}>About Us</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/'}>Support</Link></li>
                    </ul>

                    <ul>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/signup'}>Sign Up</Link></li>
                    </ul>
                </div>
            </div>
            <div className={'navigation'}>
                <div className="container">
                    <div className="navigation__left">
                        <img onClick={() => navigate('/')} className={'logo'} src={Images.GreenLogo} alt="lanchino logo"/>
                        <ul>
                            <li><a href={'/store/menu'}>Menu</a></li>
                            <li><a href={'/store/best-sell'}>Best Sell</a></li>
                            <li><a href={'/store/new-products'} className={'mark'}>New Products</a></li>
                        </ul>
                    </div>
                    <div className="navigation__right">
                        <a href="tel:">+374 (93) 654-321</a>

                        <div className="navigation__right__cart-opener">
                            <div className="navigation__right__cart-opener__count">
                                10
                            </div>
                            <ShoppingCartIcon/>
                        </div>

                        <div className="navigation__language">
                            <p className={'navigation__language-opener'}
                               onClick={() => setLanguageOpen(!languageOpen)}>{language}</p>
                            {
                                languageOpen ?
                                    <div className="navigation__language-list" onClick={() => setLanguageOpen(false)}>
                                        <p onClick={() => languageChanger(language !== 'en' ? language !== 'ru' ? 'ru' : 'hy' : 'ru')}>
                                            {language !== 'en' ? language !== 'ru' ? 'ru' : 'hy' : 'ru'}</p>
                                        <p onClick={() => languageChanger(language !== 'hy' ? language !== 'ru' ? 'hy' : 'en' : 'en')}>
                                            {language !== 'hy' ? language !== 'ru' ? 'hy' : 'en' : 'en'}</p>
                                    </div>
                                    : null
                            }

                        </div>
                        <IconMenu2 className={'mob-menu-opener'} onClick={() => setOpenMobMenu(!openMobMenu)}/>
                    </div>
                </div>


                {
                    openMobMenu ?
                        <div className={`navigation__mobile ${openMobMenu ? ' open' : ''}`}>
                            <IconX className={'close-icon'} onClick={() => setOpenMobMenu(false)}/>
                            <ul>
                                <li><Link to={'/store/menu'}>Menu</Link></li>
                                <li><Link to={'/store/best-sell'}>Best Sell</Link></li>
                                <li><Link to={'/store/new-products'} className={'mark'}>New Products</Link></li>
                                <li>Cart</li>
                            </ul>
                            <a href="tel:">+374 (93) 654-321</a>
                        </div>
                        :
                        null
                }
            </div>
        </>
    )
}