import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const Increament = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const Decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Value:{count}</h1>
      {count === 20 && <h2>We can increase the value up to 20</h2>}
      {count === 0 && <h2>We can Decrease the value up to 0</h2>}
      <button onClick={Increament}>Increment</button>
      <button onClick={Decreament}>Decrement</button>
    </>
  );
}

export default App;
