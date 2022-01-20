import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
import types from "./contact-types";

const addContact = createAction(types.ADD, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction(types.DELETE);

export { addContact, deleteContact };
