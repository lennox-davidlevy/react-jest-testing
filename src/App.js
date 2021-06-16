import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [checked, setChecked] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonColor(newButtonColor);
  };

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => {
      return !prevChecked;
    });
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: checked ? 'gray' : buttonColor,
          color: 'white',
        }}
        onClick={handleButtonClick}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={checked}
        aria-checked={checked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;
