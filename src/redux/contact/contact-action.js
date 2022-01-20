import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
import types from "./contact-types";

const addContact = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const deleteContact = createAction(types.DELETE);
const filter = createAction(types.FILTER);

//console.log(addContact("jane aue", 122011212))

export { addContact, deleteContact, filter };
