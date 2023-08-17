import React from "react";
import { Link } from "react-router-dom";

const EssentialItem = (props) => {
  return (
    <div className="essential-item">
      <figure>
        <img src={props.imgSrc} alt={props.title} />
      </figure>
      <div className="ess-content">
        <h2>{props.title}</h2>
        <Link to="#!" className={props.btnClass}>
          {props.btnText}
        </Link>
      </div>
    </div>
  );
};

export default EssentialItem;
