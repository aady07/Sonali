import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const ProgramDropdown = () => {
  const programContainerStyle = {
    width: "300px", // Adjust the width as needed
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow effect
  };

  const programLinkStyle = {
    borderBottom: "1px solid black", // Add a black line after each program
    padding: "8px", // Adjust padding as needed
  };

  return (
    <div className="absolute bg-white text-black p-4" style={programContainerStyle}>
      {[
        "Women Entrepreneurship Programme",
        "Second Chance Programme (Legal Aid)",
        "Foundation Literacy and Numeracy (FLN)",
       /* "Teacher Education",
        "Livelihoods",
        "Youth Empowerment Programme",the vakue is then registered in the main of the system by thw value in the mai of the time nadopkace of the maker the listing in the maker of the time and oapkce ofi the */
      ].map((program, index) => (
        <Link
          to={`/${program.toLowerCase().replace(/\s+/g, "-")}`} // Generating route based on program name
          key={program}
          className="block transition-transform transform hover:scale-105" // Add hover effect using CSS transition
          style={index < 5 ? programLinkStyle : { ...programLinkStyle, borderBottom: "none" }} // Add black line after each program except the last one
        >
          {program}
        </Link>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProgramDropdownOpen(false); // Close program dropdown when toggling menu
  };

  const toggleProgramDropdown = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsMenuOpen(false);
    setIsProgramDropdownOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Programs", path: "/program" },
    { link: "About", path: "/about" },
    { link: "Product", path: "/product" },
    { link: "Testimonial", path: "/testimonial" },
    { link: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className={`bg-white md:bg-white fixed top-0 left-0 right-0 transition-all duration-300 ${isSticky ? "transform translateY(-100%) opacity-0" : "transform translateY(0) opacity-100"}`}
      onMouseLeave={() => setIsProgramDropdownOpen(false)} // Close dropdown on mouse leave
    >
      <nav className="py-1 lg:px-14 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <img src={logo} alt="" className="w-24 inline-block" />
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={link} className="relative">
                <Link
                  to={path}
                  className={`block text-base text-gray900 nav-item ${location.pathname === path ? 'active' : ''}`}
                  style={{
                    textDecoration: 'none',
                    marginRight: '1.5rem',
                    color: location.pathname === path ? '#0048ab' : 'inherit',
                  }}
                  onClick={scrollToTop}
                  onMouseEnter={() => link === "Programs" && setIsProgramDropdownOpen(true)}
                >
                  {link}
                </Link>
                {link === "Programs" && isProgramDropdownOpen && <ProgramDropdown />}
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray900 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;