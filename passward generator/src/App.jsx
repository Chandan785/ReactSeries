import './App.css';
import React, { useState, useCallback, useRef } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }
    if (specialAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?`~";
    }

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
    setCopySuccess(false); // reset copy status
  }, [length, numberAllowed, charAllowed, specialAllowed]);

  const copyToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand('copy'); // fallback method
      navigator.clipboard.writeText(password); // modern method
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500); // remove after 1.5s
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-center text-orange-400 underline mb-6">
        Password Generator
      </h1>

      <div className="w-full max-w-md shadow-md rounded-lg p-6 bg-gray-800">
        <div className="flex items-center mb-4">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            className="w-full py-2 px-3 rounded bg-gray-700 text-white outline-none"
            placeholder="Generated password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="ml-2 outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 rounded-md transition-all"
          >
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="length" className="mr-2">Length: {length}</label>
          <input
            type="range"
            id="length"
            min={4}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-1/2"
          />
        </div>

        <div className="flex flex-col space-y-2 mb-4 text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <span>Include Lowercase Characters</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={specialAllowed}
              onChange={() => setSpecialAllowed((prev) => !prev)}
            />
            <span>Include Special Characters</span>
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
