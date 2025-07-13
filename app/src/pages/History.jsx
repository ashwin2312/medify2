import React from "react";
import styles from "./History.module.css";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import SearchBox from "../components/Sections/SearchBox";
import HospitalCard from "../components/Card/HospitalCard";

export default function History() {
  return (
    <div>
      <div className={styles.blueDiv}>
        <p>My Bookings</p>
        <div className={styles.searchBox}>
          <SearchBox />
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.bookedCards}>
          <HospitalCard history="true" />
        </div>
        <div className={styles.ads}></div>
      </div>
    </div>
  );
}
