import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Arrivals,
  Blog,
  Categories,
  Contact,
  Footer,
  Header,
  Home,
  Men,
  Page404,
  Women,
} from "./components/utils/helper";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/arrivals" element={<Arrivals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
