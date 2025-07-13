import React from "react";
import Hero from "../components/Sections/Hero";
import Search from "../components/Sections/Search";
import Swipper from "../components/Sections/Swipper";
import Specialisation from "../components/Sections/Specialisation";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <div
        style={{
          marginTop: "-250px",
          // marginLeft: "155px",
          display:"flex",
          justifyContent:"center",
          zIndex: "1",
          position: "relative",
        }}
      >
        <Search />
      </div>
      <Swipper />
      <Specialisation />
    </div>
  );
}
