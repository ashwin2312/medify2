import React from "react";
import { Link } from "react-router-dom";
import AmbulanceIcon from "../../assets/Ambulance.svg";
import DoctorIcon from "../../assets/Doctor.svg";
import HospitalIcon from "../../assets/Hospital.svg";
import LabIcon from "../../assets/Drugstore.svg";
import CapsuleIcon from "../../assets/Capsule.svg";

import styles from "./search.module.css"; // Assuming you have a CSS module for styling

import SearchBox from "./SearchBox";

export default function Search() {
  return (
    <div className={styles.container}>
      <SearchBox />
      <div className={styles.suggestionBox}>
        <p>You may be looking for</p>
        <div className={styles.iconsWrapper}>
          <div className={styles.icon}>
            <img src={DoctorIcon} alt="Doctor" />
            <p>Doctors</p>
          </div>
          <div className={styles.icon}>
            <img src={LabIcon} alt="Hospital" />
            <p>Labs</p>
          </div>
          <Link className={styles.linkStyle} to="/findDoctors">
            <div className={styles.icon}>
              <img src={HospitalIcon} alt="Hospital" />
              <p>Hospitals</p>
            </div>
          </Link>
          <div className={styles.icon}>
            <img src={CapsuleIcon} alt="Hospital" />
            <p>Medical Stores</p>
          </div>
          <div className={styles.icon}>
            <img src={AmbulanceIcon} alt="Pharmacy" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
