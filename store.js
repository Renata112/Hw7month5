import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./src/features/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
