import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import BookingInterface from "./BookingInterface";
import History from "./History";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/findDoctors" element={<BookingInterface />} />
        <Route path="/myBookigs" element={<History />} />
      </Routes>
    </div>
  );
}
