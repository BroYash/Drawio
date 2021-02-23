import React from "react";
import "./Lobby.css";
import InviteCode from "./InviteCode";
import LobbyPlayers from "./LobbyPlayers";
import LobbySettings from "./LobbySettings";

function Lobby() {
  return (
    <div className="lobby">
      <h1 className="lobby__title">Pictio</h1>
      <div className="lobby__body">
        <LobbySettings></LobbySettings>
        <LobbyPlayers></LobbyPlayers>
        <InviteCode></InviteCode>
      </div>
    </div>
  );
}

export default Lobby;
