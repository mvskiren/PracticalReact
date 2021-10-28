import React from 'react';
import './style.css';
import { useState, useRef, useEffect } from 'react';

export default function App() {
  const inputValue = useRef(null);
  const [cities, setCities] = useState([]);

  const addCity = (e) => {
    e.preventDefault();
    setCities([...cities, inputValue.current.value]);
  };
  console.log(cities);

  return (
    <div>
      <form>
        <label htmlFor="cityName">CityName: </label>
        <input
          type="text"
          name="CityName"
          id="cityName"
          placeHolder="Enter a city..."
          ref={inputValue}
        />
        <br />
        <button onClick={addCity}>Submit</button>
        <ul>
          {cities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
