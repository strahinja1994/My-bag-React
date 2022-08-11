import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { dataBags} from './BagsData';

export default function Search(props) {

  const [searchProduct,setSearchProduct] = React.useState('');

  const searching = (e) => {
    setSearchProduct(e.target.value);
  }

  const body = document.querySelector('body');
  const enableScroll = () => {
    if(body.style.overflow === 'hidden') {
      body.style.overflow = 'scroll'
    }
  }

  const foundProducts = dataBags.filter((value) => {
    if(searchProduct === '') {
      return ''
    }
    else if (value.title.toLowerCase().includes(searchProduct.toLowerCase())) {
      return value
    }
  }).map((value, key) => {
    return(
      <div className='search__product' key={key}>
        <h1 className='search__product-title'><span>{value.title}</span> available</h1>
      </div>
    )
  })

  return (
    <div className={props.search ? 'search-active' : 'search'}>
      <input type='text' className='search__input' placeholder='Search...' onChange={searching} />
      <FontAwesomeIcon icon={faClose} className='search__icon' onClick={() => {props.changeSearch(); enableScroll()}} />
      <div className='search__products'>
        {foundProducts}
      </div>
    </div>
  )
}
