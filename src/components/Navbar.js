import React, {useState} from 'react';
import {Link} from "gatsby";
import {FiAlignJustify} from "react-icons/fi";
import logo from '../assets/images/logo10.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="proste wegańskie przepisy"/>
          </Link>
          <button onClick={() => setShow(!show)} className="nav-btn">
            <FiAlignJustify/>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link onClick={() => setShow(false)} to="/" className="nav-link" activeClassName="active-link">home</Link>
          <Link onClick={() => setShow(false)} to="/recipes" className="nav-link" activeClassName="active-link">Przepisy</Link>
          <Link onClick={() => setShow(false)} to="/tags" className="nav-link" activeClassName="active-link">Tagi</Link>
          <Link onClick={() => setShow(false)} to="/about" className="nav-link" activeClassName="active-link">O nas</Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">Kontakt</Link>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;