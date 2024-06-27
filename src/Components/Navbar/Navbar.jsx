"use client"
import Link from "next/link"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/"><FontAwesomeIcon icon={faShop}/></Link>
      </div>

      <ul className={`navbar-menu ${showLinks ? 'show' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Products">Products</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>

      <div className="navbar-toggle" onClick={toggleLinks}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
