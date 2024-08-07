import React from "react";

const Contact = () => {
  return (
    <div class="contact-container">
      <section class="contact" id="contact">
        <h1 class="heading"> contact us </h1>

        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="name" class="box" />
            <input type="email" placeholder="email" class="box" />
            <input type="number" placeholder="phone" class="box" />
            <textarea
              name=""
              placeholder="message"
              class="box"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" class="btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
