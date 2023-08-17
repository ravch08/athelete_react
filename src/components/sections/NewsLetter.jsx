import React from "react";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsLetter = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter-wrapper">
          <h2>
            SIGN UP <br /> & GET 10% OFF.
          </h2>

          <form className="newletter-submit">
            <FontAwesomeIcon icon={faEnvelope} />
            <input name="email" type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn btn-white">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
