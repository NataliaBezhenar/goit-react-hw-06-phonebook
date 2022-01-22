import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contact-action";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    console.log(state);
    console.log(payload);
    // let duplicate = state.find((contact) => contact.name === payload.name);
    // if (duplicate) {
    //   alert("is already in contacts");
    //   return state;
    // } else {
    return [...state, payload];
    //}
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
