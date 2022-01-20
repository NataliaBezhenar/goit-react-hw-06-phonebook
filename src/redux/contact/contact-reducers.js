import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contact-action";
import types from "./contact-types";

// const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     if (state.find((contact) => contact.name === payload.name)) {
//       alert(payload.name + " is already in contacts");
//       return state;
//     } else {
//       return [...state, payload];
//     }
//   },
//   [deleteContact]: (state, { payload }) =>
//     state.filter((item) => item.id !== payload.id),
// });

export const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD: {
      console.log("add");
      console.log(Object.keys(state));
      if (state.find((contact) => contact.name === payload.name)) {
        alert(payload.name + " is already in contacts");
        return state;
      } else {
        return [...state, payload];
      }
    }
    case types.DELETE:
      console.log("delete");
      return state;
    default:
      return state;
  }
};
