import { useState } from "react";
import "./Bg.css"
function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{backgroundColor:color}}>
        <div className="subcontainer">
              <div className="btn-container">
                <button className="btn" style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
                <button className="btn" style={{backgroundColor:"Green"}} onClick={()=> setColor("green")}>Green</button>
                <button className="btn" style={{backgroundColor:"Blue"}} onClick={()=> setColor("blue")}>Blue</button>
                <button className="btn" style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>Olive</button>
              </div>
        </div>
    </div>
  )
}

export default App;
