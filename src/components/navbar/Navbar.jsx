import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt={Logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSubportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item px-2">
                  <Link to="/" className="nav-link actives">Home</Link>
                </li>
                <li className="nav-item px-2">
                <Link to="/all-products" className="nav-link">Products</Link>
                </li>
                <li className="nav-item px-2">
                <Link to="/abouts" className="nav-link">Abouts</Link>
                </li>
                <li className="nav-item px-2">
                <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          <div >
            <div className="">
              <ul className="navbar-nav mr-auto align-items-center">
                <li className="nav-item  px-2">
                  <button className="nav-link btn-search">
                    <i className="bi bi-search"></i>
                  </button>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link bag d-flex justify-content-center" href="#">
                    <i className="bi bi-bag bag-icon"></i>
                  </a>
                </li>
                <Link to='/login' className="nav-item auth auth--l px-2">Login</Link>
                <Link to='/register'className="nav-item auth px-2">Register</Link>
              </ul>
            </div>
          </div>
        
      </nav>
    </div>
  );
}
