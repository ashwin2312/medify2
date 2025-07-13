import React from "react";
import "./App.css"; // Assuming you have a global CSS file
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navigation/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Home />
    </div>
  );
}
