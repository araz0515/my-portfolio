import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <header className="App-header">
        <h3 className="intro">Hi👋 My name is</h3>
        <h1>Araz Kubtanjian</h1>
        <h3>Front-end Developer based in Montreal, Quebec</h3>
        <h3 className="about-me">
          Creating functional websites from conceptual ideas is my true vocation
        </h3>
      </header>
    </div>
  );
}

export default App;
