import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>👩‍🦰Fartuney!!!</h1>
        <Weather city="Edmonton" />
      </header>
    </div>
  );
}

export default App;
