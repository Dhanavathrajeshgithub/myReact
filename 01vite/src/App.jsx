import { use } from "react";
import Chai from "./Chai";
function App() {
  const username = "Rajesh";
  // {}-> JSX expression only accepts JS expressions, we cannot write statements here like if, for, let, const etc.
  // Ternary operator is the only way to write conditions inside JSX
  return (
    <>
      <Chai />
      <p>Chai is imported to {username === "Rajesh" ? username : 3 + 4}</p>
    </>
  );
}

export default App;
