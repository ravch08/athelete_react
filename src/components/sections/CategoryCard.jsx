import React from "react";
import { Card1, Card2, Card3, Card4 } from "../utils/helper";

const CategoryCard = () => {
  return (
    <section id="category-cards">
      <div className="container">
        <div className="category-wrapper">
          <div className="category-item">
            <img loading="lazy" src={Card1} className="w-100" alt="product" />
            <h2>SHOES</h2>
          </div>

          <div className="category-item">
            <img loading="lazy" src={Card2} className="w-100" alt="product" />
            <h2>CLOTHING</h2>
          </div>

          <div className="category-item">
            <img loading="lazy" src={Card3} className="w-100" alt="product" />
            <h2>GEAR</h2>
          </div>

          <div className="category-item">
            <img loading="lazy" src={Card4} className="w-100" alt="product" />
            <h2>SALE</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
