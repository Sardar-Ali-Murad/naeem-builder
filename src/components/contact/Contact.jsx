import React from "react";

const Contact = () => {
  return (
    <section className="contact_page">
      <div className="row">
        <div className="image">
          <img src="images/contact-img.svg" alt="" />
        </div>
        <form>
          <h3>get in touch</h3>
          <input
            type="text"
            name="name"
            required
            maxlength="50"
            placeholder="enter your name"
            className="box"
          />
          <input
            type="email"
            name="email"
            required
            maxlength="50"
            placeholder="enter your email"
            className="box"
          />
          <input
            type="number"
            name="number"
            required
            maxlength="10"
            max="9999999999"
            min="0"
            placeholder="enter your number"
            className="box"
          />
          <textarea
            name="message"
            placeholder="enter your message"
            required
            maxlength="1000"
            cols="30"
            rows="10"
            className="box"
          ></textarea>
          <input
            type="submit"
            value="send message"
            name="send"
            className="btn"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
