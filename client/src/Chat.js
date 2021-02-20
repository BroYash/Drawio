import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h1 className="chat__title">Chat</h1>
      </div>
      <div className="chat__body">
        <div className="chat_buffer">
          <div className="chat__message">
            <span className="chat__name">DankD: </span>
            Hey Guys whats up this is yo boi DankD
          </div>
          <div className="chat__message">
            <span className="chat__name">DDank: </span>
            Hey Guys whats up this is yo boi DDank
          </div>
          <div className="chat__message">
            <span className="chat__name">DDank: </span>
            Hey Guys whats up this is yo boi DDank
          </div>
        </div>
      </div>
      <div className="chat__footer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          ></input>
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
