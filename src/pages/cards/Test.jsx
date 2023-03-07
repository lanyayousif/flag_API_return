import React, { useState, useEffect } from 'react';

 export default function InputExample() {
    
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Effect function to update state based on input value
    function handleInput(event) {
      setInputValue(event.target.value);
    }

    // Add event listener to update state on input change
    const input = document.querySelector('input');
    input.addEventListener('input', handleInput);

    // Clean up the event listener when the component unmounts
    return () => {
      input.removeEventListener('input', handleInput);
    };
  }, []); // Empty array as second parameter to only run the effect once

  return (
    <div>
      <label htmlFor="input">Enter some text:</label>
      <input type="text" id="input" value={inputValue} />
      <p>You entered: {inputValue}</p>
    </div>
  );
}
