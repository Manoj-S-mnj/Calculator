import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {result ? result : display || '0'}
      </div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((val) => (
          <button onClick={() => handleClick(val)} key={val}>{val}</button>
        ))}
        {['4', '5', '6', '*'].map((val) => (
          <button onClick={() => handleClick(val)} key={val}>{val}</button>
        ))}
        {['1', '2', '3', '-'].map((val) => (
          <button onClick={() => handleClick(val)} key={val}>{val}</button>
        ))}
        {['0', '.', '=', '+'].map((val) => (
          <button onClick={() => handleClick(val)} key={val}>{val}</button>
        ))}
        
        <button onClick={() => handleClick('C')} className="clear">C</button>
      </div>
    </div>
  );
}

export default App;
