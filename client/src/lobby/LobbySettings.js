import React from "react";
import "./LobbySettings.css";
import { Button } from "@material-ui/core";

function LobbySettings() {
  return (
    <div className="lobbySettings">
      <h1 className="lobbySettings__title">Settings</h1>
      <div className="lobbySettings__body">
        <form className="lobbySettings__form">
          <label className="options__title">Lobby</label>
          <hr className="horizontalLine"></hr>
          <div className="formGroup">
            <div controlId="rndNumber">
              <form className="roundOptionsTitle">Number of Rounds</form>
              <select className="select-css" defaultValue="3" as="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div controlId="TimeLimit">
              <label className="roundOptionsTitle">Time Limit</label>
              <select className="select-css" as="select">
                <option>80</option>
                <option>60</option>
                <option>40</option>
                <option>20</option>
              </select>
            </div>
          </div>
          <center className="namebar__button">
            <Button variant="outlined">Play Game!</Button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default LobbySettings;
