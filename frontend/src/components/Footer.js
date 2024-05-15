import React, { useState } from 'react';
import axios from 'axios';


function Footer() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/subscribe', {
                email: email,
                phonenumber: phoneNumber
            });

            console.log(response.data);

            setEmail('');
            setPhoneNumber('');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            {/* Footer Section */}
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="address_text">ADDRESS</h4>
                            <p className="simply_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="address_text">QUICK LINKS</h4>
                            <div className="footer_menu_main">
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/whatwedo">What We Do</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="/client">Clients</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="newsletter_section">
                                <div className="newsletter_left">
                                    <h4 className="address_text">Newsletter</h4>
                                </div>
                                <div className="newsletter_right">
                                    <div className="social_icon">
                                        <ul>
                                            <li><a href="https://www.facebook.com"><img src="/images/fb-icon.png" alt="Facebook" /></a></li>
                                            <li><a href="https://www.twitter.com"><img src="/images/twitter-icon.png" alt="Twitter" /></a></li>
                                            <li><a href="https://www.instagram.com"><img src="/images/instagram-icon.png" alt="Instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mail_bt"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    required
                                />
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="mail_bt"
                                    placeholder="Phone"
                                    name="phonenumber"
                                    required
                                />
                                <div className="subscribe_bt"><button type="submit">Subscribe</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section End */}
            {/* Copyright Section */}
            <div className="copyright_section">
                <div className="copyright_text">Copyright 2020 All Right Reserved By <a href="https://html.design">Free html Templates</a></div>
            </div>
            {/* Copyright Section End */}
        </>
    );
}

export default Footer;
