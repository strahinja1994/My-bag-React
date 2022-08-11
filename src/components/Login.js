import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function Login(props) {

    const body = document.querySelector('body');
  
    const enableScroll = () => {
        if(body.style.overflow === 'hidden') {
        body.style.overflow = 'scroll'
        }
    }

    return(
        <div className={props.login ? 'login-active' : 'login'}>
            <div className='form'>
                <input className='login__username' type='text' placeholder='Username' />
                <input className='login__password' type='password' placeholder='Password' />
                <div className='login__buttons'>
                    <button className='signin'>Sign In</button>
                    <button className='signup'>Sign Up</button>
                    <FontAwesomeIcon icon={faClose}className='login__close' onClick={() => {props.changeLogin(); enableScroll()}} />
                </div>
            </div>
        </div>
    )
}