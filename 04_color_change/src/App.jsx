import Color_bar from "../components/Color_bar/Color_bar";

function App() {
  let myColorArr = ["blue", "red", "green", "pink", "orange"];

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center gap-4 p-5 bg-white">
      <Color_bar myColorArr={myColorArr} />
    </div>
  );
}

export default App;
