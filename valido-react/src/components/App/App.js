import React from 'react';
import './App.css';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5B7CF"
      }}>
      <Register />
    </div>
  );
}

export default App;
