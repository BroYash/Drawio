import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1 className="title">Drawio</h1>
      <div className="app__body">
        <Sidebar></Sidebar>
        {/*Drawing Panel*/}
        {/*Chat*/}
      </div>
    </div>
  );
}

export default App;
