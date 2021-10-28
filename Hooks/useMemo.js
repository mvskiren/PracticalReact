import React from 'react';
import './style.css';
import { useState, useRef, useEffect, useMemo } from 'react';

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const inc1 = () => {
    setCounter1((prevCounter1) => prevCounter1 + 1);
  };
  const inc2 = () => {
    setCounter2((prevCounter2) => prevCounter2 + 1);
  };

  const isEven = useMemo(() => {
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div className="wrapper">
      <div className="inc1">
        <h1>{counter1}</h1>
        <span>{isEven() ? 'Even' : 'Odd'} </span>
        <button onClick={inc1}> Inc1</button>
      </div>
      <div className="inc1">
        <h1>{counter2}</h1>
        <button onClick={inc2}> Inc2</button>
      </div>
    </div>
  );
}
