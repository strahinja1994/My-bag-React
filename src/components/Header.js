import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars, faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {

    const [searchHover, setSearchHover] = React.useState(false);

    function grayHover() {
        setSearchHover(searchHover => !searchHover)
    }

    function noHover() {
        setSearchHover(!searchHover)
    }

    const [bar, setBar] = React.useState(true);

    const changeBar = () => {
        setBar(bar => !bar)
    }

    const body = document.querySelector('body');
    const disableScroll = () => {
        if(body.style.overflow !== 'hidden') {
          body.style.overflow = 'hidden'
        }
      }

    return(
        <header className='header'>
            <h1 className='header__title'>My Bags</h1>
            <ul className={bar ? 'header__list' : 'header__list-active'} onClick={changeBar}>
                <li className='header__list-item'><a href='#' className='header__list-link' >Home</a></li>
                <li className='header__list-item'><a href='#products' className='header__list-link' >Products</a></li>
                <li className='header__list-item'><a href='#about' className='header__list-link' >About us</a></li>
                <li className='header__list-item'><a href='#footer' className='header__list-link' >Contact us</a></li>
                <li className='header__list-item header__search-mobile' onClick={props.changeSearch} >Search</li>
            </ul>
            <div className={!searchHover ? 'header__search' : 'header__search-hover'}>
                <FontAwesomeIcon icon={faSearch} className='header__search-icon' onMouseEnter={grayHover} onMouseLeave={noHover} onClick={() => {disableScroll(); props.changeSearch()}}/>
            </div>
            <div className='header__icons'>
                <FontAwesomeIcon icon={faCartShopping} className='header__icons-icon' />
                <FontAwesomeIcon icon={faHeart} className='header__icons-icon' />
                <FontAwesomeIcon icon={faUser} className='header__icons-icon' onClick={() => {props.changeLogin(); disableScroll();}} />
                <FontAwesomeIcon icon={bar ? faBars : faClose} className='header__icons-icon header__icons-bar' onClick={changeBar} />
            </div>
        </header>
    )
}