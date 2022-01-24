import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    Refactor `useFetch` to use `useReducer` instead of
    `useState`.
*/
const initialState = {
  data: null,
  error: null,
  loading: true
}

function fetchReducer(state, action) {
  switch (action.type) {
    case 'Fetch':
      return {
        ...state,
        loading: true
      }
    case 'Success':
      return {
        ...state,
        data: action.data,
        error: null,
        loading: false
      }
    case 'Error':
      return {
        ...state,
        error: 'Error fetching data. Try again.',
        loading: false
      }
    default :
      return {
        ...state,
        error: 'Not a correct action type',
        loading: false
      }
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  React.useEffect(() => {
   dispatch({type: 'Fetch'})

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'Success', data })
      })
      .catch((e) => {
        console.warn(e.message)
        dispatch({ type: 'Error' })
      })
  }, [url])

  return {loading: state.loading, 
  data: state.data,
   error: state.error}
}

const postIds = [1,2,3,4,5,6,7,8]

function App() {
  const [index, setIndex] = React.useState(0)

  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  )

  const incrementIndex = () => {
    setIndex((i) => 
      i === postIds.length - 1
        ? i
        : i + 1
    )
  }

  if (loading === true) {
    return <p>Loading</p>
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    )
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {error && <p>{error}</p>}
      {index === postIds.length - 1 
        ? <p>No more posts</p>
        : <button onClick={incrementIndex}>
            Next Post
          </button>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
