import { configureStore } from "@reduxjs/toolkit";
import reducer from "./contact/contact-reducers";

const initialState = { name: "", number: "" };

function contactForm(state = initialState) {
  return state;
}

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
