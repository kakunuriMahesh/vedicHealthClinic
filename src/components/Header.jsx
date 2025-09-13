import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Moon, Sun } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Health Checkup", href: "/health-checkup" },
    { name: "Doctors", href: "/doctors" },
    { name: "Departments", href: "/departments" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
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
            <div className="header-top">
              <div className="header-info">
                <span>90919 Madie Run Apt. 790</span>
                <span>hello@yoursite.com</span>
              </div>
              <div className="header-actions">
                <a href="https://wa.me/1800657876" className="whatsapp-link">
                  Connect on Whatsapp
                </a>
              </div>
            </div>

            {/* Main navigation */}
            <nav className="header-main">
              <div className="logo">
                <img
                  src="/assets/img/LOGO.png"
                  alt="VHC (Vedic Health Clinic)"
                  style={{ height: "55px" }}
                />
              </div>


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
                      <Link
                        to={item.href}
                        className={`nav-link ${
                          location.pathname === item.href ? "active" : ""
                        }`}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="header-cta">
                  {/* <div className="phone-info">
                <Phone size={20} />
                <span>1800-657-876</span>
              </div>
              <button 
                className="btn btn-primary appointment-btn"
                onClick={(e) => handleNavClick('#contact', e)}
              >
                Appointment
              </button> */}
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
