import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TechStore
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link">
              Categorías
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>
        
        <div className="nav-icons">
          <Link to="/search" className="nav-icon">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/favorites" className="nav-icon">
            <i className="fas fa-heart"></i>
          </Link>
          <Link to="/cart" className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;