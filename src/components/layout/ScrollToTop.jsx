import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState("");

  const scroller = () => {
    const scrollClass = window.scrollY > 250 ? "show" : "";
    setScrollTop(scrollClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, []);

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scroll = `${scrollTop}` ? `scrollToTop ${scrollTop}` : `scrollToTop`;

  return (
    <Link to="#!" className={scroll} onClick={scrollHandler}>
      <FontAwesomeIcon icon={faSortUp} />
    </Link>
  );
};

export default ScrollToTop;
