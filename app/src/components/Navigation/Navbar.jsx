import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import medifyLogo from "../../assets/medifyIcon.svg"; // Assuming you have a logo image
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={medifyLogo} alt="" />
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <Link className={styles.navItem} to="/findDoctors">
            Find Doctors
          </Link>
          <Link className={styles.navItem}>Hospitals</Link>
          <Link className={styles.navItem}>Medicines</Link>
          <Link className={styles.navItem}>Surgeries</Link>
          <Link className={styles.navItem}>Software for Provider</Link>
          <Link className={styles.navItem}>Facilities</Link>
        </ul>
        <Link className={styles.linkStyle} to="/myBookigs">
          <Button btnTitle="My Bookings" />
        </Link>
      </nav>
    </div>
  );
}
