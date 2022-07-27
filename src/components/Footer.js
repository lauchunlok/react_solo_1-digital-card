import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a
          target="_blank"
          //  href="mailto:lauchunlok1@gmail.com"
        >
          <img
            className="footer--image"
            src={require("../images/icon-twit.png")}
            alt="twitter link"
          />
        </a>

        <a
          target="_blank"
          //  href="mailto:lauchunlok1@gmail.com"
        >
          <img
            className="footer--image"
            src={require("../images/icon-fb.png")}
            alt="facebook link"
          />
        </a>

        <a
          target="_blank"
          //  href="mailto:lauchunlok1@gmail.com"
        >
          <img
            className="footer--image"
            src={require("../images/icon-ig.png")}
            alt="instagram link"
          />
        </a>

        <a
          target="_blank"
          //  href="mailto:lauchunlok1@gmail.com"
        >
          <img
            className="footer--image"
            src={require("../images/icon-git.png")}
            alt="github link"
          />
        </a>
      </div>
    </footer>
  );
}
