import React from 'react';

export default function Footer() {
    return(
        <footer id='#footer' className='footer'>
            <div className='footer__social'>
                <h3 className='footer__social-title'>Social Networks</h3>
                <a href='#' className='footer__social-link'>Facebook</a>
                <a href='#' className='footer__social-link'>Twitter</a>
                <a href='#' className='footer__social-link'>Instagram</a>
                <a href='#' className='footer__social-link'>LinkedIn</a>
            </div>
            <div className='footer__info'>
                <h3 className='footer__info-title'>informations</h3>
                <a href='#' className='footer__info-link'>About us</a>
                <a href='#' className='footer__info-link'>Order Tracking</a>
                <a href='#' className='footer__info-link'>Privacy & Policy</a>
                <a href='#' className='footer__info-link'>Terms & Conditions</a>
            </div>
            <div className='footer__account'>
                <h3 className='footer__account-title'>Account</h3>
                <a href='#' className='footer__account-link'>Login</a>
                <a href='#' className='footer__account-link'>My Cart</a>
                <a href='#' className='footer__account-link'>My Account</a>
                <a href='#' className='footer__account-link'>Wishlist</a>
            </div>
            <div className='footer__form'>
                <h3 className='footer__social-title'>Newsletter</h3>
                <input className='footer__form-input' type='email' placeholder='Email address'/>
                <button className='footer__form-button'>Subscribe</button>
            </div>
        </footer>
    )
}