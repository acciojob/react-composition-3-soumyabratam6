
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
        <div className="App">
        <Tooltip text="This is a tooltip for the first element">
    <h2 className="tooltip highlight">This is a tooltip</h2>
</Tooltip>
<Tooltip text="This is a tooltip for the second element">
    <p className="tooltip highlight">Hover me to see another tooltip</p>
</Tooltip>
    </div>
    </div>
  )
}

export default App
