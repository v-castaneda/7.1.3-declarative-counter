import './App.css';
import React, { useState } from 'react'

function App() {
  let [ counter, changeCounter ] = useState(1)
  return (
    <div className="App">
      <h1> {counter} </h1>
    </div>
  );
}

export default App;
