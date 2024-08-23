import React from "react";

const FAQS = () => {
  let items = [
    {
      id: 1,
      heading: "How do I schedule a consultation?",
      paragraph:
        "To schedule a consultation, simply visit our contact page and fill out the consultation request form. You can also reach out to us directly via phone or email. Our team will get in touch to confirm the details and schedule your consultation at a time that suits you.",
    },
    {
      id: 2,
      heading: "What is the timeline for completing a project?",
      paragraph:
        "The timeline for completing a project varies depending on the scope and complexity of the work. After our initial consultation, we will provide you with an estimated timeline tailored to your specific project. We aim to complete all work efficiently while maintaining the highest quality standards.",
    },
    {
      id: 3,
      heading: "How do I make payments for the project?",
      paragraph:
        "Payments can be made through our secure online payment portal or via bank transfer. After signing the contract, we will provide you with detailed payment instructions. We offer flexible payment plans to accommodate your budget and project timeline.",
    },
    {
      id: 4,
      heading: "How can I check the progress of my construction or renovation?",
      paragraph:
        "You can monitor the progress of your project by logging into your account on our website. We provide regular updates, including photos and reports, so you can stay informed throughout the construction or renovation process.",
    },
    {
      id: 5,
      heading: "What should I do if I want to make changes to the project?",
      paragraph:
        "If you wish to make changes to the project, please contact us as soon as possible. We will discuss your new requirements and provide an updated quote and timeline. It's important to communicate changes early to avoid delays and additional costs.",
    },
    {
      id: 6,
      heading:
        "Do you offer warranties on your construction and renovation work?",
      paragraph:
        "Yes, we offer warranties on all our construction and renovation work. The warranty period and coverage details will be outlined in your contract. Our commitment to quality ensures that you receive lasting results and peace of mind.",
    },
  ];

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
                      <div className="f-15">{item?.heading}</div>
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
                  <p className="f-12">{item?.paragraph}</p>
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
