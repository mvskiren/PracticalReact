import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function CounterGame () {
  const [count, setCount] = React.useState(0)
  const [timeLeft, setTimeLeft] = React.useState(10)
  const id = React.useRef(null)

  const clear = () => window.clearInterval(id.current)

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)
    return clear
  }, [])

  React.useEffect(() => {
    if (timeLeft === 0) {
      clear()
    }
  }, [timeLeft])
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft === 0 ? null : 
        <button onClick={() => setCount((c) => c + 1)}>
          +
        </button>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterGame />, rootElement);
