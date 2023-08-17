import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overlay = () => {
  return <div className="modal-overlay"></div>;
};

const ModalItem = () => {
  return (
    <div className="popUp">
      <div className="popup-wrapper">
        <h4>JOIN THE REVOLUTION</h4>
        <h2>
          SIGN UP <br /> & GET 10% OFF.
        </h2>
        <div className="newletter-submit">
          <FontAwesomeIcon icon={faEnvelope} />
          <input name="email" type="email" placeholder="Enter your email address" required />
          <button type="submit" className="btn btn-white">
            SUBSCRIBE
          </button>
        </div>

        <Link to="#!" className="popup-thanks">
          Thank you, I already submitted.
        </Link>
        <Link to="#!" className="popup-close">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </div>
    </div>
  );
};

const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay-root"))}
      {ReactDOM.createPortal(<ModalItem />, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};

export default Modal;
