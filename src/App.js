import './App.css';
import React, { useState } from 'react'

function App() {
  let [ counter, changeCounter ] = useState(1)

  /* making changeCounter a global variable for testing 
  and debugging */
  window.changeCounter = changeCounter

  return (
    <div className="App">
      <h1> {counter} </h1>
      <h2> {counter} </h2>
      <h3> {counter} </h3>
      <h4> {counter} </h4>
    </div>
  );
}

export default App;
