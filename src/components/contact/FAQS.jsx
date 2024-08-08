import React from "react";

const FAQS = () => {
  let [items, setItems] = React.useState([
    {
      id: 1,
      heading: "how to cancel booking?",
      paragraph:
        "To cancel your booking, simply visit your account dashboard, navigate to the bookings section, and select the booking you wish to cancel. Follow the prompts to confirm your cancellation. Our system will process your request immediately, ensuring a smooth experience.",
    },
    {
      id: 2,
      heading: "when will I get the possession?",
      paragraph:
        "Possession timelines vary depending on the property's status and any contractual agreements. Typically, possession is granted once all legal and financial requirements are fulfilled. You will receive a notification from our team with the exact date and necessary details.",
    },
    {
      id: 3,
      heading: "where can I pay the rent?",
      paragraph:
        "Rent payments can be made easily through our secure online payment portal. Simply log in to your account, navigate to the rent payment section, and choose your preferred payment method. We support multiple payment options for your convenience.",
    },
    {
      id: 4,
      heading: "how to contact with the buyers?",
      paragraph:
        "To contact buyers, go to your listings dashboard and select the property you're interested in. You'll find a list of potential buyers who have shown interest. Click on their profiles to send a message or schedule a meeting directly through our platform.",
    },
    {
      id: 5,
      heading: "why my listing not showing up?",
      paragraph:
        "If your listing is not showing up, it may be due to incomplete information or pending verification. Ensure all details are accurate and up-to-date. Our team reviews listings regularly, and approved listings are published within 24 hours.",
    },
    {
      id: 6,
      heading: "how to promote my listing?",
      paragraph:
        "Promote your listing by using our premium advertising options. You can boost your listing's visibility through targeted ads or featured placements on our homepage. Access these options in your account under the 'Promotions' tab to reach more potential buyers.",
    },
  ]);
  return (
    <section className="faq" id="faq">
      <h1 className="heading">FAQ</h1>
      <div className="accordion" id="accordionLocationExample">
        {items?.map((item) => {
          return (
            <div className="accordion-item">
              <h2 className="accordion-header" id={item?.id}>
                <button
                  className="accordion-button collapsed br-8"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${item?.id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${item?.id}`}
                >
                  <div className="d-flex w-100 me-3 align-items-center justify-content-between">
                    <div className="d-flex align-items-center w-100">
                      <div style={{ fontSize: "1.5rem" }}>{item?.heading}</div>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`flush-collapse${item?.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p style={{ fontSize: "1.2rem" }}>{item?.paragraph}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQS;
