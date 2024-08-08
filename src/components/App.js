
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
        
          <Tooltip text="This is a tooltip for the first element">
            <h2 className="highlight">This is a tooltip</h2>
          </Tooltip>
          <Tooltip text="This is a tooltip for the second element">
            <p className="highlight">This is another tooltip</p>
          </Tooltip>
    
    </div>
  )
}

export default App
