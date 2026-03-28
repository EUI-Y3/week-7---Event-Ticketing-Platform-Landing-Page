import React from 'react';
import './Footer.css';
import Logo from '../../Assets/Logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_inner'>

                <div className='footer_top'>

                    <div className='footer_brand'>
                        <img className='footer_logo' src={Logo} alt="Logo" />
                        <p className='footer_desc'>
                            Your go-to platform for discovering and booking amazing events — concerts, comedy, theatre, and more.
                        </p>
                        <div className='footer_socials'>
                            <a className='footer_social_link' href="#" aria-label="Facebook">f</a>
                            <a className='footer_social_link' href="#" aria-label="Twitter">𝕏</a>
                            <a className='footer_social_link' href="#" aria-label="Instagram">in</a>
                            <a className='footer_social_link' href="#" aria-label="YouTube">▶</a>
                        </div>
                    </div>

                    <div className='footer_col'>
                        <p className='footer_col_title'>Quick Links</p>
                        <a className='footer_link' href="#">Home</a>
                        <a className='footer_link' href="#">Events</a>
                        <a className='footer_link' href="#">About Us</a>
                        <a className='footer_link' href="#">Contact</a>
                    </div>

                    <div className='footer_col'>
                        <p className='footer_col_title'>Categories</p>
                        <a className='footer_link' href="#">Concerts</a>
                        <a className='footer_link' href="#">Comedy Shows</a>
                        <a className='footer_link' href="#">Theatre</a>
                        <a className='footer_link' href="#">Workshops</a>
                        <a className='footer_link' href="#">Sports</a>
                    </div>

                    <div className='footer_newsletter'>
                        <p className='footer_col_title'>Stay Updated</p>
                        <p className='footer_newsletter_desc'>
                            Subscribe to get the latest events and exclusive offers straight to your inbox.
                        </p>
                        <div className='footer_input_wrap'>
                            <input
                                className='footer_input'
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                </div>

                <div className='footer_divider' />

                <div className='footer_bottom'>
                    <p className='footer_copy'>© 2026 EventBook. All rights reserved.</p>
                    <div className='footer_bottom_links'>
                        <a className='footer_bottom_link' href="#">Privacy Policy</a>
                        <a className='footer_bottom_link' href="#">Terms of Service</a>
                        <a className='footer_bottom_link' href="#">Cookie Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;