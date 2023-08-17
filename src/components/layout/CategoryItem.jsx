import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  return (
    <div className="category-item">
      <h4>{props.title}</h4>
      <Link to="#!" className="category-links">
        {props.categoryItem1}
      </Link>
      <Link to="#!" className="category-links">
        {props.categoryItem2}
      </Link>
      <Link to="#!" className="category-links">
        {props.categoryItem3}
      </Link>
      <Link to="#!" className="category-links">
        {props.categoryItem4}
      </Link>
    </div>
  );
};

CategoryItem.prototype = {
  title: PropTypes.string.isRequired,
  categoryItem1: PropTypes.string.isRequired,
  categoryItem2: PropTypes.string.isRequired,
  categoryItem3: PropTypes.string.isRequired,
  categoryItem4: PropTypes.string.isRequired,
};

export default CategoryItem;
