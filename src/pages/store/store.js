import {Navigation} from "../../components/navigation";
import {IconChevronDown, IconSearch, IconAdjustments} from '@tabler/icons-react'
import fastFood from '../../assets/gifs/french-fries.gif'
import {Card} from "../../components/card";
import {Checkbox, Pagination} from "@mui/material";
import {Footer} from "../../components/footer";
import {useEffect, useState} from "react";
import {Loader} from "../../components/loader";
import {useParams} from "react-router";
import {Images} from "../../assets/images/images";
import {useNavigate} from "react-router-dom";


export const Store = () => {
    const [searchResultsOpen, setSearchResultsOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const param = useParams();

    const [title, setTitle] = useState(null);
    const [categoryImage, setCategoryImage] = useState(null);

    const navigate = useNavigate()

    const searchBtn = () => {
        setSearchResultsOpen(true)
        setFilterOpen(false)
        setCategoryOpen(false)
    }

    const categoryBtn = () => {
        setCategoryOpen(!categoryOpen)
        setSearchResultsOpen(false)
        setFilterOpen(false)
    }

    const categoryItemBtn = (link) => {
        navigate(`/store/${link}`)
        setCategoryOpen(!categoryOpen)
        navigate(0)
    }

    const searchItemClick = () => {
        setSearchResultsOpen(false)
    }

    const filterBtn = () => {
        setFilterOpen(!filterOpen)
        setSearchResultsOpen(false)
        setCategoryOpen(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setTitle(param.category.replace('-', ' '))
            setCategoryImage(param.category.replace('-', '_'))
        }, 2000)
    }, [])

    return(
        <>
            {
                !title ?
                    <Loader/>
                    :
                    <div className={'store'}>
            <Navigation/>

            <div className="container">
                <div className="store__top">
                    <div className="store__top__category">
                        <div className="store__top__category__img">
                            <img src={Images[categoryImage]} alt=""/>
                        </div>
                        <div className={`store__top__category__text ${categoryOpen ? 'active' : ''}`} onClick={categoryBtn}>
                            <p>Category</p>
                            <IconChevronDown/>
                        </div>

                        {
                            categoryOpen ?
                                <div className="store__top__category__more">
                            <div className={`store__top__category__more__item ${param.category.includes('cold') ? 'active' : ''}`}
                                 onClick={() => categoryItemBtn('cold-drinks')}>
                                <img src={Images.cold_drinks} alt=""/>
                                <p>Cold Drinks</p>
                            </div>
                            <div className={`store__top__category__more__item ${param.category.includes('hot') ? 'active' : ''}`}
                                 onClick={() => categoryItemBtn('hot-drinks')}>
                                <img src={Images.hot_drinks} alt=""/>
                                <p>Hot Drinks</p>
                            </div>
                            <div className={`store__top__category__more__item ${param.category.includes('fast') ? 'active' : ''}`}
                                 onClick={() => categoryItemBtn('fast-food')}>
                                <img src={Images.fast_food} alt=""/>
                                <p>Fast Food</p>
                            </div>
                            <div className={`store__top__category__more__item ${param.category.includes('main') ? 'active' : ''}`}
                                 onClick={() => categoryItemBtn('main-food')}>
                                <img src={Images.main_food} alt=""/>
                                <p>Food</p>
                            </div>
                            <div className={`store__top__category__more__item ${param.category.includes('desserts') ? 'active' : ''}`}
                                 onClick={() => categoryItemBtn('desserts')}>
                                <img src={Images.desserts} alt=""/>
                                <p>Desserts</p>
                            </div>
                        </div>
                                :
                                null
                        }
                    </div>
                    <div className={`store__top__search ${searchResultsOpen ? 'active' : ''}`}>  {/* active*/}
                        <h2>{title}</h2>
                        <div className={`store__top__search__box ${searchResultsOpen ? 'active' : ''}`}> {/* active*/}
                            <input type="text" placeholder="Search in Fast Food"/>
                            <button onClick={searchBtn}><IconSearch/></button>
                        </div>
                        {
                            searchResultsOpen ?
                                <div className="store__top__search__result">
                                    <div className="store__top__search__result__item"
                                        onClick={searchItemClick}
                                    >
                                        <img
                                            src="https://th.bing.com/th/id/OIP.-hqL4TRpBi9GBM8L73e2tQHaE8?w=960&h=640&rs=1&pid=ImgDetMain"
                                            alt=""/>
                                        <p>country potatoes</p>
                                        <b>300 <span>AMD</span></b>
                                    </div>
                                    <div className="store__top__search__result__item" onClick={searchItemClick}>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.-hqL4TRpBi9GBM8L73e2tQHaE8?w=960&h=640&rs=1&pid=ImgDetMain"
                                            alt=""/>
                                        <p>country potatoes</p>
                                        <b>300 <span>AMD</span></b>
                                    </div>
                                    <div className="store__top__search__result__item" onClick={searchItemClick}>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.-hqL4TRpBi9GBM8L73e2tQHaE8?w=960&h=640&rs=1&pid=ImgDetMain"
                                            alt=""/>
                                        <p>country potatoes</p>
                                        <b>300 <span>AMD</span></b>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                    <div className="store__top__filter">
                        <div className={`store__top__filter__opener ${filterOpen ? 'active' : ''}`}
                            onClick={filterBtn}
                        > {/* active*/}
                            <p>Filter</p>
                            <IconAdjustments/>
                        </div>

                        {
                            filterOpen ?
                                <div className="store__top__filter__options">
                                    <div className="store__top__filter__options__item">
                                        <Checkbox
                                            // checked={}
                                            // onChange={handleChange}
                                            inputProps={{'aria-label': 'controlled'}}
                                        />
                                        <p>Filter Name</p>
                                    </div>
                                    <div className="store__top__filter__options__item">
                                        <Checkbox
                                            // checked={}
                                            // onChange={handleChange}
                                            inputProps={{'aria-label': 'controlled'}}
                                        />
                                        <p>Filter Name</p>
                                    </div>
                                    <div className="store__top__filter__options__item">
                                        <Checkbox
                                            // checked={}
                                            // onChange={handleChange}
                                            inputProps={{'aria-label': 'controlled'}}
                                        />
                                        <p>Filter Name</p>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>

                <div className="store__middle">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <div className="store__end">
                    <Pagination count={10} defaultPage={3}/>
                </div>
            </div>

            <Footer/>
        </div>
            }
        </>
    )
}