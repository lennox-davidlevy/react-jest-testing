import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [checked, setChecked] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
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
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
