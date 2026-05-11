"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.css";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Grupos", path: "/grupos" },
  { name: "Actividades", path: "/actividades" },
  { name: "Voces", path: "/voces" },
  { name: "Galería", path: "/galeria" },
  { name: "Agenda", path: "/agenda" },
];

export const Menu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.menuContainer}>
      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${styles.navLink} ${pathname === link.path ? styles.active : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.mobileNavLink} ${pathname === link.path ? styles.active : ""}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
