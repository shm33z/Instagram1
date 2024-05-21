import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers.tsx";

export const store = configureStore({
  reducer: { data: rootReducer },
});
