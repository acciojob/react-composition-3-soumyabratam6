
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div className="App">
        <div>
          <Tooltip text1="This is a tooltip for the first element">
            <h2 className="highlight">This is a tooltip</h2>
          </Tooltip>
        </div>
          <div>
            <Tooltip text2="This is a tooltip for the second element">
              <p className="highlight">This is another tooltip</p>
            </Tooltip>
          </div>
    </div>
  )
}

export default App
