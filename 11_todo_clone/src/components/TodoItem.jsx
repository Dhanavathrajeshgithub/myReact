import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { updateTode, toggleComplete, deleteTodo } = useTodo();
  const [isTodoChecked, setIsTodoChecked] = useState(todo.completed);
  const [todoMsg, setTodoMsg] = useState(todo.task);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleCheckBox = (e) => {
    setIsTodoChecked(e.target.checked);
    toggleComplete(todo.id);
  };
  const handleTodoMsg = (e) => {
    setTodoMsg(e.target.value);
  };
  const handleEdit = (e) => {
    if (todo.completed) return;
    e.preventDefault();
    if (isTodoEditable) {
      setIsTodoEditable(false);
      updateTode(todo.id, { ...todo, task: todoMsg });
    } else {
      setIsTodoEditable(true);
    }
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        checked={isTodoChecked}
        onChange={handleCheckBox}
      />
      <input
        type="text"
        value={todoMsg}
        onChange={handleTodoMsg}
        readOnly={!isTodoEditable}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
      />

      {/* Edit and save button */}
      <button onClick={handleEdit} disabled={todo.completed}>
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo button */}
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default TodoItem;
