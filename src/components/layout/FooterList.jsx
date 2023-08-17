import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const FooterList = (props) => {
  return (
    <div className="ftr-cols">
      <Link to="#!" className="ftr-link">
        {props.title}
      </Link>
      <div className="ftr-list">
        {props.arrList.map((arr) => (
          <Link to="#!" key={uuidv4()}>
            {arr}
          </Link>
        ))}
      </div>
    </div>
  );
};

FooterList.prototype = {
  title: PropTypes.string.isRequired,
  arrList: PropTypes.object.isRequired,
};

export default FooterList;
