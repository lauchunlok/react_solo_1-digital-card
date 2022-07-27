import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img src={require("../images/Photo.png")} className="info--pic" />

      <h1 className="info--name">Laura Smith</h1>
      <h2 className="info--title">Frontend Developer</h2>
      <h3 className="info--site">laurasmith.website</h3>

      <div className="btn">
        <a
          target="_blank"
          className="email-btn"
          href="mailto:lauchunlok1@gmail.com"
        >
          <img
            className="btn--image--email"
            src={require("../images/Email.png")}
            alt="email link"
          />
          Email
        </a>

        <a
          target="_blank"
          className="linkedin-btn"
          href="https://www.linkedin.com/in/chun-lok-lau-456a77178/"
        >
          <img
            className="btn--image--linkedin"
            src={require("../images/LinkedIn.png")}
            alt="Linkedin link"
          />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
