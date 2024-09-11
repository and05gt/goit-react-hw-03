// import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul>
      {contactsData.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
