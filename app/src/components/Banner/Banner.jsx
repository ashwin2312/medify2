import React from "react";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container}>
      <p>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
    </div>
  );
}
