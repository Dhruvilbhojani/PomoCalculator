import { useState } from "react";
import "./App.css";
import { Calculator } from "./component/Calculator";
import { Pomodoro } from "./component/Pomodoro";

function App() {
const [active, setActive] = useState(true);

  return (
    <div className="App">
      <div className="appMenu">
        <div className="menuCalc" onClick={()=>{setActive(false)}}>Calculator</div>
        <hr />
        <div className="menuPomo" onClick={()=>{setActive(true)}}>Pomodoro</div>
      </div>


      <Calculator active={active}/>
      <Pomodoro active={!active}/>
    </div>
  );
}

export default App;
