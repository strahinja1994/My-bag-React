import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Fullscreen(props) {

  const [maximize, setMaximize] = React.useState(props.zoom);

  const changeMaximize = () => {
    setMaximize(maximize => !maximize)
  }

  const body = document.querySelector('body');
  
  const disableScroll = () => {
    if(body.style.overflow !== 'hidden') {
      body.style.overflow = 'hidden'
    }
  }

  const enableScroll = () => {
    if(body.style.overflow === 'hidden') {
      body.style.overflow = 'scroll'
    }
  }

  return (
    <div className='fullscreen'>
      <FontAwesomeIcon icon={faMaximize} className='products__bags-bag--maximize' onClick={() => {changeMaximize(); disableScroll()}} />
      <div className={maximize ? 'fullscreen__zoom-active' : 'fullscreen__zoom'}>
        <FontAwesomeIcon icon={faClose} onClick={() => {changeMaximize(); enableScroll()}} className='fullscreen__zoom-icon' />
        <h1 className='fullscreen__zoom-title'>{props.title} <span>{props.price}$</span></h1>
        <img src={props.image} alt={props.alt} className='fullscreen__zoom-image' />
        <p className='fullscreen__zoom-text'>{props.text}</p>
      </div>
    </div>
  )
}
