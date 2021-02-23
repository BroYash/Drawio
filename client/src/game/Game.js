import React from "react";
import Canvas from "./Canvas";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./Game.css";

function Game() {
  return (
    <div className="game">
      <h1 className="game__title">Pictio</h1>
      <div className="game__body">
        <Sidebar></Sidebar>
        <Canvas></Canvas>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default Game;
