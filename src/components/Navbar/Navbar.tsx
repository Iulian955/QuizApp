import React, { useEffect, useRef, useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import images from "../../data/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => window.location.pathname === path;

  return (
    <div className={styles.header}>
      <Helmet>
        <meta name="description" content="Navabr" />
      </Helmet>
      <div className={styles.headerContainer}>
        <HashLink className={styles.logoDiv} to="/"></HashLink>

        <nav className={isMenuOpen ? styles.responsiveNavbar : " "}></nav>

        {isMenuOpen ? (
          <FaTimes className={styles.hamburger} onClick={handleOnClick} />
        ) : (
          <FaBars className={styles.hamburger} onClick={handleOnClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
