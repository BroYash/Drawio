import React from "react";
import "./Homepage.css";
import Namebar from "./Namebar";

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Pictio</h1>
      <div className="homepage__body">
        <Namebar></Namebar>
      </div>
    </div>
  );
}

export default Homepage;
