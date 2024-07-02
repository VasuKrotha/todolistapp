import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      let id = new Date().getTime();
      state.push({
        id: id,
        task: action.payload,
        completed: false,
      });
    },
    removetotdo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    edittodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
      }
    },
    toggletodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addtodo, removetotdo, edittodo, toggletodo } =
  todosSlice.actions;
export default todosSlice.reducer;
