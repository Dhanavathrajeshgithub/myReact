import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  let myArr = [1, 2, 3];
  let myObj = { name: "John", age: 30 };
  return (
    <>
      <h1 className="bg-blue-500 mb-6">Tailwind CSS</h1>
      <Card keys="value" myArr={myArr} myObj={myObj} arr={[1, 23]} />
    </>
  );
}

export default App;
