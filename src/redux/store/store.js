import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducers } from "../reducers/userReducers";

const reducer = {
  userStore: userReducers,
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
