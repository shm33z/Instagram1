import { combineReducers } from "redux";
import { userSlice } from "./useSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
