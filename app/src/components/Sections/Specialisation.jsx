import React from "react";
import styles from "./specialisation.module.css"; // Assuming you have a CSS module for styling
import Button from "../Button/Button";
import DrugStore from "../../assets/DrugStore.svg";
import Stethescope from "../../assets/Stethoscope.svg";
import HeartRate from "../../assets/HeartRate.svg";
import BloodTest from "../../assets/BloodSample.svg";
import Pico from "../../assets/Immune.svg";
import Xray from "../../assets/X-Ray.svg";
import MRI from "../../assets/Heart_Rate_Monitor.svg";



export default function Specialisation() {
  return (
    <div className={styles.container}>
      <p>Find by specialisation</p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src={DrugStore} alt="" />
          <p>Dentistry</p>
        </div>
        <div className={styles.card}>
          <img src={Stethescope} alt="" />
          <p>Primary Care</p>
        </div>
        <div className={styles.card}>
          <img src={HeartRate} alt="" />
          <p>Cardiology</p>
        </div>
        <div className={styles.card}>
          <img src={MRI} alt="" />
          <p>MRI Resonance</p>
        </div>
        <div className={styles.card}>
          <img src={BloodTest} alt="" />
          <p>Blood Test</p>
        </div>
        <div className={styles.card}>
          <img src={Pico} alt="" />
          <p>Piscologist</p>
        </div>
        <div className={styles.card}>
          <img src={DrugStore} alt="" />
          <p>Laboratory</p>
        </div>
        <div className={styles.card}>
          <img src={Xray} alt="" />
          <p>X-Ray</p>
        </div>
      </div>
      <Button btnTitle="View All" />
    </div>
  );
}
