
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
        <div className="App">
      <h1>React Tooltip Example</h1>
      <div>
      <h2><Tooltip text="This is a tooltip for the first element">
        <h1 className="highlight">Hover over me!</h1>
      </Tooltip></h2>
      </div>
      <div className="tooltip2">
      <p><Tooltip text="This is a tooltip for the second element">
        <p className="highlight">Hover me to see another tootip</p>
      </Tooltip></p>
      </div>
    </div>
    </div>
  )
}

export default App
