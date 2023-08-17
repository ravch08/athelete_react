import React from "react";
import {
  Banner,
  Brands,
  CategoryCard,
  CategoryList,
  Essentials,
  Features,
  Gear,
  NewArrivals,
  NewsLetter,
  Premium,
  SideBySide,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <Essentials />
      <Features />
      <NewArrivals />
      <SideBySide />
      <Gear />
      <hr className="light" />
      <Premium />
      <CategoryCard />
      <CategoryList />
      <hr className="light" />
      <Brands />
      <NewsLetter />
    </main>
  );
};

export default Home;
