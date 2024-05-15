import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(storedIsLoggedIn);
    }, [location.pathname]); // Her sayfa değiştiğinde useEffect çalışacak

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function handleLogout() {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
        navigate('/login');
    }

    // Menü kapanırken oturum durumunu güncelle
    useEffect(() => {
        const handleMenuClose = () => {
            closeNav();
            setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        };

        // Component kaldırıldığında event listener'ı temizle
        return () => window.removeEventListener('click', handleMenuClose);
    }, []);

    return (
        <div className="header_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <Link to="/"><img src="../images/logo.png" alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="menu_text">
                            <ul>
                                <div id="myNav" className="overlay">
                                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                    <div className="overlay-content">
                                         <li><a href="/">Home</a></li>
                                        <li><a href="/whatwedo">What We Do</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                        <li><a href="/client">Clients</a></li>
                                        {isLoggedIn ? (
                                            <li id="logoutButton"><button onClick={handleLogout}>Logout</button></li>
                                        ) : null}
                                    </div>
                                </div>
                                <span className="navbar-toggler-icon"></span>
                                <span onClick={openNav}><img src="../images/toogle-icon.png" className="toggle_menu" /></span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

// <li><Link to="/">Home</Link></li>
// <li><Link to="/whatwedo">What We Do</Link></li>
// <li><Link to="/about">About</Link></li>
// <li><Link to="/services">Services</Link></li>
// <li><Link to="/contact">Contact Us</Link></li>
// <li><Link to="/client">Clients</Link></li>
