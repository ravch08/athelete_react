import React from "react";
import { categoryItems } from "../utils/data";
import { CategoryItem } from "../utils/helper";

const CategoryList = () => {
  const categoryItemsList = categoryItems?.map((categoryItem) => (
    <CategoryItem
      key={categoryItem.id}
      title={categoryItem.title}
      categoryItem1={categoryItem.categoryItem1}
      categoryItem2={categoryItem.categoryItem2}
      categoryItem3={categoryItem.categoryItem3}
      categoryItem4={categoryItem.categoryItem4}
    />
  ));

  return (
    <section id="category-list">
      <div className="container">
        <div className="category-wrapper"> {categoryItemsList} </div>
      </div>
    </section>
  );
};

export default CategoryList;
