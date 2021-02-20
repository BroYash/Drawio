import "./App.css";
import Canvas from "./Canvas";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
      <h1 className="title">Pictio</h1>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Canvas></Canvas>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
