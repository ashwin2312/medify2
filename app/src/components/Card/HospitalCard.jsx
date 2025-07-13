import React, { useState } from "react";

import hosLogo from "../../assets/div.u-pos-has.svg";
import { IoMdThumbsUp } from "react-icons/io";
import styles from "./hospitalCard.module.css";
import Button from "../Button/Button";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

export default function HospitalCard({
  history = false,
  hospitalName,
  address,
  rating,
  cityName,
  stateName,

}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div className={styles.div1}>
          <div className={styles.logo}>
            <img src={hosLogo} alt="" />
          </div>
          <div className={styles.info}>
            <p>{hospitalName}</p>
            <p>{address}</p>
            <p>Smilessence Center for Advanced Dentistry + 1</p>
            <p>
              <span
                style={{
                  fontWeight: "700",
                  fontStyle: "bold",
                  color: "#02A401",
                }}
              >
                FREE
              </span>{" "}
              <span
                style={{ textDecoration: "line-through", color: "#787887" }}
              >
                ₹500
              </span>{" "}
              Consultation fee at clinic
            </p>
            <div>
              <button>
                <IoMdThumbsUp />
                <p>{rating}</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <div style={{ alignSelf: "flex-start", display: "flex" }}>
            {history ? (
              <div className={styles.postBookDiv}>
                <div className={styles.timeDiv}>
                  <p>Time</p>
                </div>
                <div className={styles.dateDiv}>
                  <p>Date</p>
                </div>
              </div>
            ) : (
              <div className={styles.preBookDiv}>
                <p>Available Today</p>
                {isModalOpen ? (
                  <Button
                    btnTitle="Hide Booking Calendar"
                    handleClick={handleModal}
                  />
                ) : (
                  <Button
                    btnTitle="Book FREE Center Visit"
                    handleClick={handleModal}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Select date and time"
                  value={selectedDate}
                  onChange={setSelectedDate}
                />
              </DemoContainer>
            </LocalizationProvider>

            <input type="email" placeholder="Enter your email" required />
            <div className={styles.modalButtons}>
              <Button
                btnTitle="Confirm Booking"
                handleClick={() => {
                  setIsModalOpen(false);
                  setSelectedDate(dayjs());
                }}
              />
              <Button
                btnTitle="Cancel"
                handleClick={() => {
                  setIsModalOpen(false);
                  setSelectedDate(dayjs());
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
