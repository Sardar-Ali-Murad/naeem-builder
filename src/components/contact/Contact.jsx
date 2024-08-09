import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const initialValues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .max(50, "Must be 50 characters or less")
      .required("Email is required"),
    number: Yup.number()
      .typeError("Must be a valid number")
      .min(0, "Number cannot be negative")
      .required("Number is required"),
    message: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (isLoading) return;
    setIsLoading(true);
    emailjs
      .send("service_ijyrlcy", "template_3za67cj", values, "Y-d1kMGQ-xCp-FA22")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          resetForm();
          toast.success("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="contact_page">
      <div className="row">
        <div className="image">
          <img src="images/contact-img.svg" alt="" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h3>get in touch</h3>

              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="box"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="box"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <Field
                  type="number"
                  name="number"
                  placeholder="enter your number"
                  className="box"
                />
                <ErrorMessage name="number" component="div" className="error" />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="enter your message"
                  cols="30"
                  rows="10"
                  className="box"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn">
                {isLoading ? "Loading..." : "send message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
