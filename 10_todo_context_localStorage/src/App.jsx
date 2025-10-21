import { useEffect, useState } from "react";
import "./App.css";
import { Todoprovider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      let newTodos = prev.map((ele) => {
        if (ele.id === id) return todo;
        return ele;
      });
      return newTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      let newTodos = prev.filter((ele) => {
        return ele.id !== id;
      });
      return newTodos;
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) => {
      let newTodos = prev.map((ele) => {
        if (ele.id === id) {
          return { ...ele, completed: !ele.completed };
        } else {
          return ele;
        }
      });
      return newTodos;
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
    <Todoprovider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((ele) => (
              <div key={ele.id} className="w-full">
                <TodoItem todo={ele} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
