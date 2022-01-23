import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contact-action";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
