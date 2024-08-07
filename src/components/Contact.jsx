import React from "react";

const Contact = () => {
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

          <form onSubmit={(event) => event.preventDefault()}>
            <h3>get in touch</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="phone" className="box" />
            <textarea
              name=""
              placeholder="message"
              className="box"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input
              value="send message"
              className="btn"
              onClick={(event) => event.preventDefault()}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
