import React from 'react';
import './App.css';
import MainBox from './components/MainBox';

const App = () => {

  return (
    <>
    <MainBox color={'some'} />
    <h1> Select color</h1>
    <div style={{display: 'flex'}}>
      <div style={{backgroundColor: 'red', height: 50, width: 50}}></div>
      <div style={{backgroundColor: 'yellow', height: 50, width: 50}}></div>
      <div style={{backgroundColor: 'green', height: 50, width: 50}}></div>
      <div style={{backgroundColor: 'blue', height: 50, width: 50}}></div>
      <div style={{backgroundColor: 'orange', height: 50, width: 50}}></div>
      <div style={{backgroundColor: 'black', height: 50, width: 50}}></div>
    </div>
    </>
  );
  
}

export default App;
