import { createSlice, nanoid } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem("todos"));
const initialState = {
  todos: data ? data : [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((ele) => ele.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((ele) =>
        ele.id !== action.payload.id
          ? ele
          : { ...ele, text: action.payload.text }
      );
    },

    toggleChange: (state, action) => {
      state.todos = state.todos.map((ele) =>
        ele.id !== action.payload ? ele : { ...ele, completed: !ele.completed }
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleChange } =
  todoSlice.actions;

export default todoSlice.reducer;
