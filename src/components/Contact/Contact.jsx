import { FaUser, FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={style.contactWrapper}>
      <p className={style.contactName}>
        <FaUser /> {name}
      </p>
      <p className={style.contactNumber}>
        <FaPhone /> {number}
      </p>

      <button className={style.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
