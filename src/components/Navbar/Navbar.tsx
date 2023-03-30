import './navbar.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <div className="navContainer">
      <nav className={isMobile ? 'mobileNavbar' : 'navbar'}>
        {menu ? (
          <div className="mobileLinks">
            <Link to="/" onClick={() => setMenu(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenu(false)}>
              About
            </Link>
            <Link to="/experience" onClick={() => setMenu(false)}>
              Experience
            </Link>
            <Link to="/contact" onClick={() => setMenu(false)}>
              Contact
            </Link>
          </div>
        ) : (
          <div className="name">
            <h2>Ricards</h2>
          </div>
        )}
        <div className="ehh"></div>
        {isMobile ? (
          <>
            <div className="navMenu" onClick={() => handleMenuClick()}>
              <img
                src="https://cdn-user-icons.flaticon.com/97988/97988708/1680161656394.svg?token=exp=1680162562~hmac=a1f9fa79faf8878d679befd6169a6087"
                alt="menu"
                width="20px"
                height="20px"
              />
            </div>
          </>
        ) : (
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
