import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let cnt = 0;
  // let p = document.getElementById("p");
  // const Add = () => {
  //   cnt++;
  //   console.log(p);
  //   p.innerHTML = `Your Count is: ${cnt}`;
  // };
  // const Remove = () => {
  //   cnt--;
  //   p.innerHTML = `Your Count is: ${cnt}`;
  // };

  // HOOKS -> special function provided by react library to use state and other react features in functional components

  const [cnt, setCnt] = useState(13); // useState is a Hook (special fuction) that allows you to have state variables in functional components. When you call setCnt(newValue), React re-renders the component with the new state value.
  const Add = () => {
    setCnt(cnt + 1);
  };
  const Remove = () => {
    if (cnt) {
      setCnt(cnt - 1);
    }
  };
  return (
    <>
      <h1>Counter Game </h1>
      <p id="p">Your Count is: {cnt}</p>
      <p>My count is: {cnt}</p>
      <button onClick={Add}>Add</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={Remove}>Remove</button>
      <p>Footer: {cnt}</p>
      <p>Legger: {cnt}</p>
    </>
  );
}

export default App;
