import reactLogo from "./assets/react.svg";

import Index from "./components";

import "./App.css";


function App() {
  return (
    <div className="App">
      <div>
        <h1>CodeKovacs</h1>
      </div>
      <h3>Built with Vite + React</h3>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Index />
    </div>
  );
}

export default App;
