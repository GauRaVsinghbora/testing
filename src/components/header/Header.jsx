import { Link, NavLink } from 'react-router-dom';
import '../../App.css';
import logoImg from '../../assets/logo.png';
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 50);

    setIsVisible(scrollTop < lastScrollTop || scrollTop < 10);
    setLastScrollTop(scrollTop);
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);
    
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
        <Link to="/" className="logo">
            <img src={logoImg} alt="My Logo" className="logo-img" />
        </Link>
        <nav className="nav-links">
            <NavLink to="/" className="nav-item">Home</NavLink>
            <NavLink to="/about" className="nav-item">About</NavLink>
            <NavLink to="/services" className="nav-item">Services</NavLink>
            <NavLink to="/projects" className="nav-item">Our Fleet</NavLink>
            <NavLink to="/contact" className="nav-item">Contact</NavLink>
        </nav>
        <button className="signin-btn">Sign In</button>
        </header>
    );
    };

export default Header;