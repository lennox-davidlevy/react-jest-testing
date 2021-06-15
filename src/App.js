import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: buttonColor,
          color: 'white',
          fontWeight: '600',
          minWidth: '150px',
        }}
        onClick={handleButtonClick}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
