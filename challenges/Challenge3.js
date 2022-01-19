import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/


function Wait ({ delay = 1000, placeholder, ui }) {
  
const [flag,setFlag]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
          setFlag(false);
        },delay)
    },[]);
  return (
    <>

    {flag ? placeholder: ui}
       </>
  )
}

function App() {
  return (
    <div className="App">
      <Wait 
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
