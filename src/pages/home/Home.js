import React from 'react';
import"./Home.css"
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Features from '../../components/featured/Features';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className='homeContainer'>
                <Features></Features>
                <h1 className='homeTitle'>choice your hotel look like</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
                
                
            </div>
        </div>
    );
};

export default Home;