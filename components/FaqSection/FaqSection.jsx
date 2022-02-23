import React, { useState } from "react";

const FaqSection = ({ name, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="faq-section">
      <div
        onClick={() => setOpen((prevState) => !prevState)}
        className="section-heading"
      >
        <h3 className="section-name">{name}</h3>
        <i className={`${open && "open"} fas fa-chevron-down`}></i>
      </div>
      <div className={`section-content ${open && "active"}`}>{children}</div>
    </section>
  );
};

export default FaqSection;
