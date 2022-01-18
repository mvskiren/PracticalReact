import React,{useState,useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function Todo () {
  const [items,setItems]=useState([]);
  const inputRef=useRef(); 

 const addValue = (e) => {
    e.preventDefault();
   setItems([...items, { name: inputRef.current.value, id: generateId() }]);
 }
  const removeTodo = (id) => setItems(items.filter((t) => t.id !== id))

  return (
    <div> 
    <form>
    <label htmlFor="inputText"></label>
      <input type="text" name="input" id="inputText" ref={inputRef} />
      <input type="submit" onClick={addValue} value="submit"/>
    </form>f
      {items.map(({name,id})=> ( 
        <div className="cards" key={id}>
        <h3>{name}</h3>
          <span onClick={() => removeTodo(id)}>-</span>
        </div>
        )
      )
        }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
------------------------------------------------------------------------------------------ solution -2 
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function generateId () {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function Todo () {
  const [todos, setTodos] = React.useState([])
  const [input, setInput] = React.useState('')

  const handleSubmit = () => {
    setTodos((todos) => todos.concat({
      text: input,
      id: generateId() 
    }))
    setInput('')
  }

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id))

  return (
    <div>
      <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='New Todo'
      />
      <button onClick={handleSubmit}>Submit</button>
      
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
