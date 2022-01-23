//import { useSelector } from "react-redux";

import "./Phonebook.css";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

export default function Phonebook() {
  // const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);
  // const filter = useSelector((state) => state.filter);
  // console.log(filter);

  // const filteredContacts = () => {
  //   console.log(contacts);
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };

  return (
    <div className="Phonebook__wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </div>
  );
}
