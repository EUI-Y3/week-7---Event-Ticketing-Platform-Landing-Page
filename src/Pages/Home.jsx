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
import Chips from '../Components/Comman/Chips';
import Event_cards from '../Components/Comman/Event_Cards';
import Event1 from '../Assets/event 1.png';
import Event2 from '../Assets/event 2.png';
import Event3 from '../Assets/event 3.png';
import Event4 from '../Assets/event 4.png';
import Event5 from '../Assets/event 5.png';
import Event6 from '../Assets/event 6.png';

const Home = () => {
    return (
        <>
        <Header/>
        <main>
            <section className="hero_section">
                <img className='hero_img' src={Hero_img} alt="" />
                <div className="hero_div1">
                    <h1>Discover & Book <br/>Amazing Events</h1>
                    <h5>Find concerts, workshops, comedy shows, and more. <br/>Your next unforgettable experience is just a click away.</h5>
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
            <section className='section3'>
                <div className='section3_div1'>
                    <h2>Upcoming Events</h2>
                    <div className='section3_div2'>
                        <Chips text="Concerts"/>
                        <Chips text="Comedy"/>
                        <Chips text="Theatre"/>
                        <Chips text="Workshops"/>
                        <Chips text="Talks"/>
                        <Chips text="Sports"/>
                    </div>
                </div>
                <div className='section3_div3'>
                    <div className='section3_div2'>
                        <Event_cards
                            category="Concerts"
                            img={Event1}
                            title="Summer Music Festival 2026"
                            subtitle="Join us for an unforgettable night of live music"
                            details1="April 15, 2026"
                            details2="7:00 PM"
                            details3="Central Park Arena"
                        />
                        <Event_cards
                            category="Comedy"
                            img={Event2}
                            title="Comedy Night Spectacular"
                            subtitle="Top comedians performing hilarious stand-up"
                            details1="April 20, 2026"
                            details2="8:30 PM"
                            details3="Laugh Factory"
                        />
                        <Event_cards
                            category="Theatre"
                            img={Event3}
                            title="The Grand Opera Night"
                            subtitle="Classic opera performance with world-class artists"
                            details1="April 25, 2026"
                            details2="6:00 PM"
                            details3="National Theatre"
                        />
                    </div>
                    <div className='section3_div2'>
                        <Event_cards
                            category="Workshops"
                            img={Event4}
                            title="Creative Art Workshop"
                            subtitle="Learn painting techniques from expert artists"
                            details1="May 5, 2026"
                            details2="10:00 AM"
                            details3="Art Studio Downtown"
                        />
                        <Event_cards
                            category="Talks"
                            img={Event5}
                            title="Tech Innovation Summit"
                            subtitle="Leading tech experts share insights on AI and future tech"
                            details1="May 10, 2026"
                            details2="9:00 AM"
                            details3="Convention Center"
                        />
                        <Event_cards
                            category="Sports"
                            img={Event6}
                            title="Championship Finals"
                            subtitle="Watch the most anticipated match of the season"
                            details1="May 15, 2026"
                            details2="5:00 PM"
                            details3="Sports Stadium"
                        />
                    </div>
                </div>
            </section>
            
        </main>
        </>
    );
}

export default Home;