import React, { useState } from 'react';
import './App.css';
import MainBox from './components/MainBox';

const App = () => {
  const [color, setColor] = useState('purple')

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <MainBox color={color} />
      <h1> Select color </h1>
      <div style={{display: 'flex'}}>
      <div
          style={{ backgroundColor: 'red', height: 50, width: 50 }}
          onClick={() => handleColorChange('red')}
        ></div>
        <div
          style={{ backgroundColor: 'yellow', height: 50, width: 50 }}
          onClick={() => handleColorChange('yellow')}
        ></div>
        <div
          style={{ backgroundColor: 'green', height: 50, width: 50 }}
          onClick={() => handleColorChange('green')}
        ></div>
        <div
          style={{ backgroundColor: 'blue', height: 50, width: 50 }}
          onClick={() => handleColorChange('blue')}
        ></div>
        <div
          style={{ backgroundColor: 'orange', height: 50, width: 50 }}
          onClick={() => handleColorChange('orange')}
        ></div>
        <div
          style={{ backgroundColor: 'black', height: 50, width: 50 }}
          onClick={() => handleColorChange('black')}
        ></div>
      </div>
    </>
  );
  
}

export default App;
