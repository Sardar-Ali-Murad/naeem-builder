import React from "react";

const FAQS = () => {
  let [items, setItems] = React.useState([
    {
      id: 1,
      heading: "how to cancel booking?",
      paragraph:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis ducimus aut accusantium sunt error esse laborum cumque ipsum ab.",
    },
    {
      id: 2,
      heading: "when will I get the possession?",
      paragraph:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis ducimus aut accusantium sunt error esse laborum cumque ipsum ab.",
    },
    {
      id: 3,
      heading: "where can I pay the rent?",
      paragraph:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis ducimus aut accusantium sunt error esse laborum cumque ipsum ab.",
    },
    {
      id: 4,
      heading: "how to contact with the buyers?",
      paragraph:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis ducimus aut accusantium sunt error esse laborum cumque ipsum ab.",
    },
    {
      id: 5,
      heading: "why my listing not showing up?",
      paragraph:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis ducimus aut accusantium sunt error esse laborum cumque ipsum ab.",
    },
    {
      id: 5,
      heading: "how to promote my listing?",
      paragraph:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis ducimus aut accusantium sunt error esse laborum cumque ipsum ab.",
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
                      <div style={{fontSize:"1.5rem"}}>{item?.heading}</div>
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
                  <p style={{fontSize:"1.2rem"}}>{item?.paragraph}</p>
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
