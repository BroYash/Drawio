import Paper from "paper";

const Draw = () => {
  let myPath;

  Paper.view.onMouseDown = (event) => {
    myPath = new Paper.Path();
    myPath.strokeColor = "white";
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };

  Paper.view.draw();
};

export default Draw;
