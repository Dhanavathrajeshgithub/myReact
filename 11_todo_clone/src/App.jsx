import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { TodoContextProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((ele) => (ele.id === id ? todo : ele));
    });
  };
  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((ele) => ele.id !== id);
    });
  };
  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((ele) =>
        ele.id === id ? { ...ele, completed: !ele.completed } : ele
      );
    });
  };

  // Local Storage  //
  /* getItem */
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  /* setItem */
  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );
  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */} <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((ele) => (
              <>
                <div key={ele.id}>
                  <TodoItem todo={ele} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
