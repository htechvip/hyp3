import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown when menu toggles
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="company-name">Hyperionsoft</span>
        </Link>
      </div>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/models" className="nav-link" onClick={closeMenu}>Models</Link>
        <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
        <div className={`nav-item-with-dropdown ${dropdownOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={toggleDropdown}>Company</a>
          <div className="dropdown-menu">
            <Link to="/mission" className="dropdown-link" onClick={closeMenu}>Mission</Link>
            <Link to="/research" className="dropdown-link" onClick={closeMenu}>Research</Link>
          </div>
        </div>
        <Link to="/insights" className="nav-link" onClick={closeMenu}>Insights</Link>
      </nav>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
