import React, { useState } from 'react';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
  };

  const handleDivision = () => {
    setResult(parseFloat(input1) / parseFloat(input2));
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <h2>Result: {result !== null ? result : 'No result'}</h2>
      </div>
    </div>
  );
};

export default Calculator;
