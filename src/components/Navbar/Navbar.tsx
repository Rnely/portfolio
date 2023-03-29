import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">
        <h2>Ricards</h2>
      </div>
      <div className="links">
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Experience</Link>
        <Link to="">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
