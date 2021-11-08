import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const fs = window.require("fs");
const { app } = window.require("@electron/remote");

function App() {
  console.log("test2");
  const [path, setPath] = useState(app.getAppPath());

  const files = fs.readdirSync(path);
  console.log(files);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> cocacola and save to reload.
        </p>
        <pre>{JSON.stringify(files, null, 2)}</pre>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
