import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [todoMsg, setTodoMsg] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (todoMsg != "") {
      addTodo({ id: Date.now(), task: todoMsg, completed: false });
      setTodoMsg("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Write Todo"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      <button onClick={add}>Add</button>
    </>
  );
};

export default TodoForm;
