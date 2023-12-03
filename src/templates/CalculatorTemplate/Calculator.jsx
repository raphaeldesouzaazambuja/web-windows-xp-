import React, { useState } from 'react';
import './Calculator.css';

function Calculator({onClose}) {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const concatResult = `${number1}${number2}`;
    setResult(concatResult);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="calculator">
      <div className="buttons">
        <p className="minimize">-</p>
        <p className="close" onClick={handleClose}>x</p>
      </div>
      <div className="title">
        <h2>Calculadora: <br /> soma de 2 números</h2>
      </div>
      <div className="inputs">
        <label htmlFor="number1">Digite o primeiro número:</label>
        <input
          type="text"
          className="inputText"
          id="number1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <label htmlFor="number2">Digite o segundo número:</label>
        <input
          type="text"
          className="inputText"
          id="number2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button type="button" onClick={handleSum}>
          Somar? 🥺
        </button>
      </div>
      <div className="result">
        <p id="result">{result}</p>
      </div>
    </div>
  );
}

export { Calculator };
