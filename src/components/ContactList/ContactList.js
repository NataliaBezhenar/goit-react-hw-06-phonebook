import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./ContactList.css";
import { deleteContact } from "../../redux/contact/contact-action";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactList__item" key={id}>
          {name}: {number}
          <button
            className="ContactList__button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
