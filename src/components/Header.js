/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-primary"
        style={{
          background: "linear-gradient(45deg, #0d2b40 30%, #34a1eb 90%)",
        }}
      >
        <a class="navbar-brand" style={styles.navLinkCol}>
          Mohanraj Venkatachalam
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ml-4 mr-4">
              <Link to="/" class="nav-link" style={styles.navLinkCol}>
                Home <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/About" class="nav-link" style={styles.navLinkCol}>
                About
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/Skills" class="nav-link" style={styles.navLinkCol}>
                Skills<span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/Projects" class="nav-link" style={styles.navLinkCol}>
                Projects
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/Contact" class="nav-link" style={styles.navLinkCol}>
                Contact
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/Kncetians" class="nav-link" style={styles.navLinkCol}>
                Kncetians
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/CountryHen" class="nav-link" style={styles.navLinkCol}>
                CountryHen
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/Vimarza" class="nav-link" style={styles.navLinkCol}>
                Vimarza
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link to="/Quiz" class="nav-link" style={styles.navLinkCol}>
                Quiz
              </Link>
            </li>
            <li class="nav-item ml-4 mr-4">
              <Link
                to="/CarAnimation"
                class="nav-link"
                style={styles.navLinkCol}
              >
                Animation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
const styles = {
  navLinkCol: {
    color: "white",
    fontSize: "15px",
  },
};
