import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Overview from "./Components/Overview/Overview";
import PerformanceGraph from "./Components/PerformanceGraph/PerformanceGraph";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Overview />
          <PerformanceGraph />
        </div>
      </div>
    </>
  );
}

export default App;
