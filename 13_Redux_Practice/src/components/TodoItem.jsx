import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo, toggleChange } from "../features/todoSlice";
const TodoItem = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        onChange={() => dispatch(toggleChange(todo.id))}
        className="cursor-pointer"
        checked={todo.completed}
      />
      <input
        type="text"
        value={todoMsg}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isTodoEditable) {
            dispatch(updateTodo({ id: todo.id, text: todoMsg }));
          }
          setIsTodoEditable(!isTodoEditable);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
