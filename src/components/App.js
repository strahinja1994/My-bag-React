import React from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import Login from './Login';
import Slider from './Slider';
import Banner from './Banner';
import Search from './Search';

export default function App(){

    const [login,setLogin] = React.useState(false);
    function changeLogin() {
        setLogin(login => !login);
    }

    const [search,setSearch] = React.useState(false);
    function changeSearch() {
        setSearch(search => !search);
    }

    return(
        <div className='container'>
            <Login 
                login={login}
                changeLogin={changeLogin}
            />
            <Search
                search={search}
                changeSearch={changeSearch}
            />
            <Header 
                changeLogin={changeLogin}
                changeSearch={changeSearch}
            />
            <Banner />
            <Slider />
            <Products />
            <Footer />
        </div>
    )
}