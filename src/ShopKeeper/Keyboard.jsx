// src/ShopKeeper/Keyboard.js
/*import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard = () => {
  const letters = 'ABCDEFGHIJKLM'.split('');
  const numbers = '0123456789NOPQRSTUVWXYZ'.split('');
  const symbols = '!@#$%^&*()'.split('');

  const [currentSet, setCurrentSet] = useState(letters);

  const cycleSet = () => {
    if (currentSet === letters) {
      setCurrentSet(numbers);
    } else if (currentSet === numbers) {
      setCurrentSet(symbols);
    } else {
      setCurrentSet(letters);
    }
  };

  return (
    <div className="keyboard">
      {currentSet.map((char, index) => (
        <button key={index} className="typewriter-button">
          {char}
        </button>
      ))}
      <button onClick={cycleSet} className="typewriter-button next-button">
        Next
      </button>
    </div>
  );
};

export default Keyboard;*/

// src/ShopKeeper/Keyboard.js
import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard = () => {
  const lettersPart1 = 'ABCDEFGHIJKLM'.split('');        // A-M
  const lettersPart2AndNumbers = 'NOPQRSTUVWXYZ0123456789'.split('');  // N-Z and numbers
  const symbols = '!@#$%^&*()'.split('');                // Symbols

  const [currentSet, setCurrentSet] = useState(lettersPart1);

  const cycleSet = () => {
    if (currentSet === lettersPart1) {
      setCurrentSet(lettersPart2AndNumbers);
    } else if (currentSet === lettersPart2AndNumbers) {
      setCurrentSet(symbols);
    } else {
      setCurrentSet(lettersPart1);
    }
  };

  return (
    <div className="keyboard">
      {currentSet.map((char, index) => (
        <button key={index} className="typewriter-button">
          {char}
        </button>
      ))}
      <button onClick={cycleSet} className="typewriter-button next-button">
        Next
      </button>
    </div>
  );
};

export default Keyboard;

