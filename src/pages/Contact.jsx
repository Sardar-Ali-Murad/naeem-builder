import React from "react";
import Contact from "../components/contact/Contact";
import FAQS from "../components/contact/FAQS";

const ContactPage = () => {
  return (
    <div className="contact_page_container">
      <Contact />
      <FAQS />
    </div>
  );
};

export default ContactPage;
