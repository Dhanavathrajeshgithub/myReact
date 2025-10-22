import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <h1>Hello redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
