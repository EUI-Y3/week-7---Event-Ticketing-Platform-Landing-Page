import React from 'react';
import './Home.css';
import Header from '../Components/Layout/Header';
import Hero_img from '../Assets/hero img.png';
import Button from '../Components/Comman/Button';


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
        </main>
        </>
     );
}
 
export default Home;