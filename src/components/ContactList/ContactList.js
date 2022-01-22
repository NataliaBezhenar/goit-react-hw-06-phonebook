import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ContactList.css";
import { deleteContact } from "../../redux/contact/contact-action";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);
  const filter = useSelector((state) => state.filter);
  console.log(filter);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const dispatch = useDispatch();
  return (
    <ul className="ContactList">
      {!isEmpty(contacts) &&
        contacts.map(({ id, name, number }) => {
          console.log("mapping contacts");
          return (
            <li className="ContactList__item" key={id}>
              {name}: {number}
              <button
                className="ContactList__button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
