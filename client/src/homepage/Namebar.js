import React from "react";
import "./Namebar.css";
import { Button } from "@material-ui/core";
function NameInput() {
  return (
    <div>
      <form className="namebar">
        <div className="namebar__input">
          <input placeholder="Enter your name"></input>
          <button>PLAY!</button>
        </div>
        <div className="namebar__button">
          <Button variant="outlined">Play!</Button>
        </div>
      </form>
    </div>
  );
}

export default NameInput;
