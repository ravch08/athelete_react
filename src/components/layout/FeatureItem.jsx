import PropTypes from "prop-types";
import React from "react";

const FeatureItem = (props) => {
  return (
    <div className="feature-item">
      <figure>
        <img loading="lazy" src={props.imgSrc} alt={props.title} />
      </figure>
      <h4>{props.title}</h4>
      <div className="btn btn-blue">SHOP NOW</div>
    </div>
  );
};

FeatureItem.prototype = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default FeatureItem;
