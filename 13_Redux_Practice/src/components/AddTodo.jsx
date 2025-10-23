import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
const AddTodo = () => {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoMsg && todoMsg.length > 0) {
      dispatch(addTodo(todoMsg));
      setTodoMsg("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Write your task ..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
