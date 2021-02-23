import React, { useRef, useEffect } from "react";
import "./Canvas.css";
import Paper from "paper";
import Draw from "./Draw";

function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    Paper.setup(canvas);
    Draw();
  }, []);

  return (
    <div className="canvas">
      <div className="canvas__header">
        <h1 className="word">Random Word</h1>
      </div>
      <div className="canvas__body">
        <canvas ref={canvasRef} {...props}></canvas>
      </div>
    </div>
  );
}

export default Canvas;
