import { Formik, Form, Field } from "formik";
// import style from "./ContactForm.module.css";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);

    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="name" />
          </label>
          <label>
            <span>Number</span>
            <Field type="number" name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
