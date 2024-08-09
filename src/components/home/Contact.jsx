import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
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
    phone: Yup.number()
      .typeError("Must be a valid number")
      .min(0, "Number cannot be negative")
      .required("Phone number is required"),
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
    <div className="contact-container">
      <section className="contact" id="contact">
        <h1 className="heading"> contact us </h1>

        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.1064120294113!2d-1.872960324077738!3d52.45910024073754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb8e8544d83b%3A0xb02697f499ecd98a!2s6%20Walford%20Rd%2C%20Sparkbrook%2C%20Birmingham%20B11%201NR%2C%20UK!5e0!3m2!1sen!2s!4v1723050204746!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

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
                    placeholder="name"
                    className="box"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    className="box"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="phone"
                    className="box"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="message"
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
    </div>
  );
};

export default Contact;
