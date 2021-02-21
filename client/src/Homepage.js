import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Pictio</h1>
      <div className="homepage__body">
        <div className="homepage__bodyContainer">
          {/*  Left: Input field */}
          {/* Right: Lobby of players */}
          {/* Bottom: Invite code */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
