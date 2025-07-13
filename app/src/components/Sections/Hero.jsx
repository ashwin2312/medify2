import React from "react";
import Button from "../Button/Button";
import heroImg from "../../assets/hero_image.svg"; // Assuming you have a hero image
import styles from "./hero.module.css"; // Assuming you have a CSS module for styling

export default function Hero() {
  return (
    <div className={styles.container}>
      <div style={{ width: "580px", height: "207px" }}>
        <p
          style={{
            fontWeight: "500",
            fontSize: "31px",
            lineHeight: "68px",
            color: "#102851",
          }}
        >
          Skip the travel! Find Online{" "}
          <span
            style={{ fontWeight: "700", fontSize: "56px", lineHeight: "68px" }}
          >
            Medical
          </span>{" "}
          <span
            style={{
              fontWeight: "700",
              fontSize: "56px",
              lineHeight: "68px",
              color: "#2AA7FF",
            }}
          >
            Centers
          </span>
        </p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "32px",
            color: "#5C6169",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <Button btnTitle="Find Centers" />
      </div>
      <img src={heroImg} alt="" />
    </div>
  );
}
