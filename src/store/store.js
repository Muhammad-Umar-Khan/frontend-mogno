import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { projectReducer } from "./reducers/projectReducer";

const store = configureStore({
  reducer: {
    projectReducer,
    userReducer,
  },
});

export default store;
