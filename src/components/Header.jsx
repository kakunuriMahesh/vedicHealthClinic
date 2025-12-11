import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Moon, Sun } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // Scroll to top instantly when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("selected-theme");

    if (savedTheme === "dark") {
      setIsDarkMode(false);
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      document.body.style.backgroundColor = "#111827";
    } else {
      setIsDarkMode(true);
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      document.body.style.backgroundColor = "#ffffff";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".header-main")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "About", href: "#about", scroll: true },
    { name: "Service", href: "#services", scroll: true },
    { name: "Qualification", href: "#qualification", scroll: true },
    { name: "Testimonial", href: "#testimonials", scroll: true },
    { name: "Contact", href: "#contact", scroll: true },
  ];

  const handleNavClick = (href, scroll, e) => {
    setIsMenuOpen(false);
    if (scroll && href.startsWith('#')) {
      e?.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      document.body.style.backgroundColor = "#ffffff";
      localStorage.setItem("selected-theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      document.body.style.backgroundColor = "#111827";
      localStorage.setItem("selected-theme", "dark");
    }

    // Force re-render of all components
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <>
      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div
          className={`mobile-menu-backdrop ${isMenuOpen ? "active" : ""}`}
          onClick={closeMobileMenu}
        />
      )}

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="">
          <div className="header-content">
            {/* Top bar */}
            {/* <div className="header-top">
              <div className="header-info">
                <span>90919 Madie Run Apt. 790</span>
                <span>hello@yoursite.com</span>
              </div>
              <div className="header-actions">
                <a href="https://wa.me/1800657876" className="whatsapp-link">
                  Connect on Whatsapp
                </a>
              </div>
            </div> */}

            {/* Main navigation */}
            <nav className="header-main">
              <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                <div className="logo-icon">
                  <span>DR</span>
                </div>
                <div className="logo-text">
                  <span className="logo-name">Dr. Priya</span>
                  <span className="logo-surname">Ramachandran</span>
                  <span className="logo-title">General Physician, Chennai</span>
                </div>
              </Link>


              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                  <li className="mobile-menu-header">
                    {/* <h3>Menu</h3>
                  <button 
                    className="mobile-menu-close"
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button> */}
                  </li>
                  {navItems.map((item) => (
                    <li key={item.name}>
                      {item.scroll ? (
                        <a
                          href={item.href}
                          className="nav-link"
                          onClick={(e) => handleNavClick(item.href, true, e)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className={`nav-link ${
                            location.pathname === item.href ? "active" : ""
                          }`}
                          onClick={() => handleNavClick()}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="header-cta">
                  <button 
                    className="btn btn-primary appointment-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Phone size={18} />
                    Book Now
                  </button>
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    title="Toggle theme"
                  >
                    {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                  </button>
                </div>

                {!isMenuOpen && (
                  <button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                  >
                    {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
                    <Menu size={24} />
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
