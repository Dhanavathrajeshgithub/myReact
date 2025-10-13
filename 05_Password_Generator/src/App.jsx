import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [pass, setPass] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);

  const cachedFn = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumber) {
      str += "0123456789";
    }
    if (isChar) {
      str += "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
    setPass(password);
  }, [length, isNumber, isChar, pass]);
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(pass);
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 26);
  };

  // useRef Hook -> takes reference of any element
  const passRef = useRef(null);
  useEffect(cachedFn, [length, isNumber, isChar]);

  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div>
          <input
            value={pass}
            type="text"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button onClick={copyToClipboard}>copy</button>
        </div>
        <div>
          <input
            type="range"
            min={6}
            max={30}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>

          <input
            id="number"
            type="checkbox"
            onChange={() => {
              setIsNumber((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>

          <input
            id="char"
            type="checkbox"
            onChange={() => {
              setIsChar((prev) => !prev);
            }}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
