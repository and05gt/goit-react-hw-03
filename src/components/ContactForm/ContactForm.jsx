import { nanoid } from "nanoid";
// import style from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="number">
          Number
          <input type="number" name="number" id="number" />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
