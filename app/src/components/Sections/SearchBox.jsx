import React from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import styles from "./searchBox.module.css";

export default function SearchBox({
  cityList,
  stateList,
  setStateName,
  setCityName,
  stateName,
  cityName,
}) {
  return (
    <div className={styles.container}>
      <InputField
        inputTitle="State"
        inputType="text"
        lists={stateList}
        setStateName={setStateName}
        stateName={stateName}
      />
      <InputField
        inputTitle="City"
        inputType="text"
        lists={cityList}
        setCityName={setCityName}
        cityName={cityName}
      />
      <Link className={styles.linkStyle} to="/findDoctors">
        <Button btnTitle="Search" />
      </Link>
    </div>
  );
}
