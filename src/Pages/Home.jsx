import React from 'react';
import './Home.css';
import Header from '../Components/Layout/Header';
import Hero_img from '../Assets/hero img.png';
import Button from '../Components/Comman/Button';
import Concert_Icon from '../Assets/streamline-ultimate_concert-dj.svg';
import Comedy from '../Assets/material-symbols-light_theater-comedy-outline-rounded.svg';
import Theatre from '../Assets/thearter icon.svg';
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
import Tablet from '../Assets/tablet png.png';
import Calender from '../Assets/calender icon.svg';
import Clock from '../Assets/clock icon.svg';
import Location from '../Assets/location icon.svg';
import Card2 from '../Components/Comman/Card2';
import Card3 from '../Components/Comman/Card3';
import Preloader from '../Components/Comman/preloader';
import Form_input from '../Components/Comman/Form_input';
import Person from '../Assets/person icon.svg';
import Mail from '../Assets/mail icon.svg';
import Ticket from '../Assets/ticket icon.svg'
import Number from '../Assets/material-symbols-light_theater-comedy-outline-rounded.svg';


const Home = () => {
    return (
        <>
        <Preloader/>
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
            <section className='section4'>
                <h2>Electric Dreams Festival 2026</h2>
                <div className='section4_div1'>
                    <img src={Tablet} alt="" />
                    <div className='section4_div2'>
                    <h4 className='section4_h4'>The biggest electronic music festival of the year featuring <br></br> world-renowned DJs and producers. Experience stunning visuals,<br></br> incredible sound systems, and an unforgettable atmosphere.</h4>
                    <div className='section4_div3'>
                        <div className='section4_div4'>
                            <img className='section4_icons' src={Calender} alt="" />
                            <h4 className='section4_h4'>June 15, 2026</h4>
                        </div>
                        <div className='section4_div4'>
                            <img className='section4_icons' src={Clock} alt="" />
                            <h4 className='section4_h4'>8:00 PM</h4>
                        </div>
                        <div className='section4_div4'>
                            <img className='section4_icons' src={Location} alt="" />
                            <h4 className='section4_h4'>City Center Stadium</h4>
                        </div>
                    </div>
                    <Button text='Get Tickets Now'/>
                    </div>
                </div>
            </section>
            <section className='section5'>
                <h2>Why Choose Our Platform?</h2>
                <div className='section3_div2'>
                    <Card2 icon={Concert_Icon} title="Easy Booking" subtitle="Book tickets in just a few clicks"/>
                    <Card2 icon={Comedy} title="Secure Payment" subtitle="Your transactions are safe and encrypted"/>
                    <Card2 icon={Theatre} title="Wide Variety" subtitle="Thousands of events to choose from"/>
                    <Card2 icon={Workshop} title="24/7 Support" subtitle="We are here to help you anytime"/>
                </div>
                 <div className='section3_div2'>
                    <Card3 title="10K+" subtitle="Events"/>
                    <Card3 title="500K+" subtitle="Happy Users"/>
                    <Card3 title="50+" subtitle="Cities"/>
                    <Card3 title="4.8" subtitle="Rating"/>
                </div>
            </section>
            <section className='section6'>
                <div className='section6_div1'>
                    <h2>Book Your Tickets</h2>
                    <h4 className='section6_h4'>
                        Fill in your details to complete your booking
                    </h4>
                </div>
                <div className='bookform'>
                    <div className='bookform_div1'>
                        <Form_input title="Full Name" icon={Person}  text="Enter full name" />
                         <Form_input title="Email Address" icon={Mail}  text="Enter your email" />
                          <Form_input title="Select Event" icon={Ticket}  text="Select your event" />
                           <Form_input title="Number of Tickets" icon={Number}  text="Enter number of ticket" />
                           <div className='bookform_btn'>
                           <Button text="Book Ticket"/>
                           </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}

export default Home;