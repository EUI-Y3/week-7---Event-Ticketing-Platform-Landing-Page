import React from 'react';
import './Home.css';
import Header from '../Components/Layout/Header';
import Hero_img from '../Assets/hero img.png';
import Button from '../Components/Comman/Button';
import Concert_Icon from '../Assets/streamline-ultimate_concert-dj.svg';
import Comedy from '../Assets/material-symbols-light_theater-comedy-outline-rounded.svg';
import Theatre from '../Assets/ticket icon.svg';
import Workshop from '../Assets/workshop icon.svg';
import Talks from '../Assets/talks icon.svg';
import Sports from '../Assets/sports icon.svg';
import Card1 from '../Components/Comman/Card1';


const Home = () => {
    return ( 
        <>
        <Header/>
        <main>
            <section className="hero_section">
                <img className='hero_img' src={Hero_img} alt="" />
                <div className="hero_div1">
                    <h1>Discover & Book <br></br>Amazing Events</h1>
                    <h5>Find concerts, workshops, comedy shows, and more. <br></br>Your next unforgettable experience is just a click away.</h5>
                    <Button text="Explore Events"/>
                </div>
            </section>
            <section className='section2'>
                <h2>Event Categories</h2>
                <div className='section2_div2'>
                    <Card1 img={Concert_Icon} title="Concerts"/>
                    <Card1 img={Comedy} title="Comedy"/>
                    <Card1 img={Theatre} title="Theatre"/>
                    <Card1 img={Workshop} title="Workshops"/>
                    <Card1 img={Talks} title="Talks"/>
                    <Card1 img={Sports} title="Sports"/>
                </div>
            </section>
        </main>
        </>
     );
}
 
export default Home;