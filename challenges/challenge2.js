import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left." 
*/

function App() {
  const [words,setWords]= useState('');
  const [flag, setFlag] = useState(true);

  const handleChange = (e) => { 
    let currLen=e.target.value.length; 
    console.log(currLen);
   if(currLen ===0 || currLen >=240){
       setFlag(true);
    } 
    else {
     setFlag(false);
    }        
    setWords(e.target.value);
    document.title =(240 - (currLen)) +"Characters left";
  }
  return (
    <div className="App">
      <textarea value={words} onChange={handleChange} />
      <br />
      <button disabled={flag} >submit</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
