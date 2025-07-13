import React, { useState, useEffect } from "react";
import { MdOutlineVerified } from "react-icons/md";
import HospitalCard from "../components/Card/HospitalCard";
import SearchBox from "../components/Sections/SearchBox";
import adImg from "../assets/ad.svg";
import styles from "./bookingInterface.module.css";

export default function BookingInterface() {
  const [stateName, setSateName] = useState();
  const [cityName, setCityName] = useState();
  // const [hospitalName, setHospitalName] = useState();

  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);
  // https://meddata-backend.onrender.com/states
  const statesListAPI = `https://meddata-backend.onrender.com/states`;
  const citiesListAPI = `https://meddata-backend.onrender.com/cities/${stateName}`;
  const hospitalsListAPI = `https://meddata-backend.onrender.com/data?state=${stateName}&city=${cityName}`;

  const getStates = async () => {
    try {
      const response = await fetch(statesListAPI);
      const data = await response.json();
      setStateList(data);
    } catch (error) {
      console.error("Error fetching states::", error);
    }
  };
  // getStates();
  // For debugging purposes
  // console.log("State List:", stateList);
  const getCities = async () => {
    try {
      const response = await fetch(citiesListAPI);
      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  const getHospitals = async () => {
    try {
      const response = await fetch(hospitalsListAPI);
      const data = await response.json();
      setHospitalList(data);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  // Call the functions to fetch data when the component mounts
  useEffect(() => {
    getStates();
    console.log("State List:", stateList);
    if (stateName) {
      getCities();
    }
    if (stateName && cityName) {
      getHospitals();
    }
  }, [stateName, cityName]);

  return (
    <div>
      <div className={styles.blueDiv}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.searchBoxContainer}>
          <SearchBox
            stateName={stateName}
            cityName={cityName}
            cityList={cityList}
            stateList={stateList}
            setStateName={setSateName}
            setCityName={setCityName}
          />
        </div>
      </div>
      {/* ______________________________________________________________ Main Section _______________________________________________ */}
      <div className={styles.text}>
        <p className={styles.p_for_availableCenters}>
          {hospitalList.length} medical centers available in Alaska
        </p>
        <div className={styles.p_verified}>
          <MdOutlineVerified />
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.hospitalCardContainer}>
          {hospitalList.length > 0 ? (
            hospitalList.map((hospital, index) => (
              <HospitalCard
                key={index}
                hospitalName={hospital.hospitalName}
                address={hospital.address}
                city={hospital.city}
                state={hospital.state}
                phoneNumber={hospital.phoneNumber}
                rating={hospital.rating}
              />
            ))
          ) : (
            <p className={styles.p_for_availableCenters}>
              {hospitalList.length} medical centers available in{" "}
              {stateName || "your selected state"} and{" "}
              {cityName || "your selected city"}.
            </p>
          )}
          {/* <HospitalCard /> */}
        </div>
        <div>
          <img src={adImg} alt="" />
        </div>
      </div>
    </div>
  );
}
