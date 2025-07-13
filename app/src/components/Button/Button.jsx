import React from "react";
import { GrSearch } from "react-icons/gr";
import styles from "./button.module.css";

export default function Button({ btnTitle, handleClick }) {
  return (
    <button className={styles.container} onClick={handleClick}>
      {btnTitle == "Search" && <GrSearch />}
      {btnTitle}
    </button>
  );
}
