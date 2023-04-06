import React from 'react';
import"./Home.css"
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Features from '../../components/featured/Features';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className='homeContainer'>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;