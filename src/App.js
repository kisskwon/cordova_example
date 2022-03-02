import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [inputText, setInputText] = useState();

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const callCordova = () => {
    window.cordova.plugins.Syncup.coolMethod(inputText, (result) => {
      console.log("kks", result);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input value={inputText} onChange={onChange} />
        <button onClick={callCordova}>SEND</button>
      </header>
    </div>
  );
}

export default App;
