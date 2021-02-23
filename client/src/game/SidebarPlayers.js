import React, { useEffect, useState } from "react";
import "./SidebarPlayers.css";
import { Avatar } from "@material-ui/core";

function SidebarPlayers() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarPlayers__info">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <h2 className="ranking">#1</h2>
      <div className="sidebarPlayers__infoRight">
        <p className="name">Name</p>
        <p>Points: 0</p>
      </div>
    </div>
  );
}

export default SidebarPlayers;
