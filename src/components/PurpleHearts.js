import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function PurpleHearts(props) {

    const [purpleHeart,setPurpleHeart] = React.useState(props.purpleHeart);

    const changePurpleHeart = () => {
        setPurpleHeart(purpleHeart => !purpleHeart)
    }  

    return (
        <FontAwesomeIcon icon={faHeart} className='products__bags-bag--heart' style={{color: purpleHeart ? '#9d67c9' : '#ffffff'}} onClick={changePurpleHeart} />
    )
}
