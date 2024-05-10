import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './SignupForm';

function App() {
  const handleSignup = async (data) => {
    try {
      const response = await fetch('http://your-backend-url/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SignupForm onSubmit={handleSignup} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
