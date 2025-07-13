import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
// import InputAdornment from "@mui/material";
import { GrLocation } from "react-icons/gr";
import styles from "./inputField.module.css";

function IconInput({
  placeholder,
  children,
  type,
  lists,
  setStateName,
  setCityName,
  cityName,
  StateName,
  handleChange = () => {},
  setName,
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.iconWrap}>{children}</div>
      {/* <input placeholder={placeholder} type={type} /> */}
      <select
        value={setName}
        onChange={handleChange}
        className={styles.selectInput}
      >
        <option value="State">{placeholder}</option>
        {lists &&
          lists.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}

export default function InputField({
  inputTitle,
  inputType,
  lists,
  setStateName,
  setCityName,
  cityName,
  stateName = "",
}) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (inputTitle === "State") {
      setStateName(event.target.value);
    } else if (inputTitle === "City") {
      setCityName(event.target.value);
    }
  };
  const setName = cityName || stateName;

  return (
    <>
      <div className={styles.inputWrap}>
        <IconInput
          placeholder={inputTitle}
          type={inputType}
          lists={lists}
          handleChange={handleChange}
          setStateName={setStateName}
          setCityName={setCityName}
          cityName={inputValue}
          StateName={inputValue}
          setName={setName}
        >
          <GrLocation />
        </IconInput>
      </div>
    </>
  );
}
