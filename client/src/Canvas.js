import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";

function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.linewidth = 20;
    contextRef.current = context;

    // function handleResize(canvas, pct) {
    //   var cw = canvas.width;
    //   var ch = canvas.height;
    //   tempCanvas.width = cw;
    //   tempCanvas.height = ch;
    //   tempContext.drawImage(canvas, 0, 0);
    //   canvas.width *= pct;
    //   canvas.height *= pct;
    //   var ctx = canvas.getContext("2d");
    //   ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * pct, ch * pct);
    // }

    // window.addEventListener("resize", handleResize);
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (isDrawing) {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    } else {
      return;
    }
  };
  return (
    <div className="canvas">
      <div className="canvas__header">
        <h1 className="word">Random Word</h1>
      </div>
      <div className="canvas__body">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
}

export default Canvas;
