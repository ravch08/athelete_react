import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

const NewArrivalItem = (props) => {
  const priceClass = `${props.price}` ? `prod-price` : `d-none`;
  const crossClass = `${props.priceCrossed}` ? `cross-price` : `d-none`;

  return (
    <div className="newArrival-item">
      <figure>
        <img loading="lazy" src={props.imgSrc} alt={props.title} />
      </figure>
      <div className="oc-description">
        <h4>{props.title}</h4>
        <span className={priceClass}>${props.price}</span>
        <span className={crossClass}>${props.priceCrossed}</span>
      </div>
      <Link to="#!" className="btn btn-blue">
        QUICKVIEW
      </Link>
    </div>
  );
};

NewArrivalItem.prototype = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceCrossed: PropTypes.number.isRequired,
};

export default NewArrivalItem;
