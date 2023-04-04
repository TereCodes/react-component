import React from 'react'
import Header from './Header';
import Main from './Main';
import "../styles/google-app.css";
import SearchBar from './SearchBar';
import Footer from './Footer';

const GoogleApp = () => {

    return (
        <div className='container'>
            <Header />
            <SearchBar />
            <Main />
            <Footer />
        </div>

    )
}

export default GoogleApp