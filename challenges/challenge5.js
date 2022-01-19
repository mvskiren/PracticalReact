import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

/*
  Instructions:
    You're given a `useWindowDimensions` custom Hook. Your
    job is to finish implementing it. It should return
    an object with a `width` property that represents the current
    width of the window and a `height` property which represents
    the current height. 

    To get those values, you can use teh `window.addEventListener`
    API.https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
*/

function useWindowDimensions() {
  const [width,setWidth]= React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  React.useEffect(() => {
    const update = () => { 
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);  
    }
    window.addEventListener('resize', update);
  })
      
  return {
    width,
    height 
  }
}


function App() {
  const { width, height } = useWindowDimensions()

  return (
    <div className="App">
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
