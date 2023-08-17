import React from "react";
import { Link } from "react-router-dom";

import { footerListItems } from "../utils/data";
import { FooterBar, FooterList, ScrollToTop, SocialLinks } from "../utils/helper";

const Footer = () => {
  const footerItemsLists = footerListItems?.map((footerListItem) => (
    <FooterList
      key={footerListItem.id}
      title={footerListItem.title}
      arrList={footerListItem.arrList}
    />
  ));

  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div className="ftr-logo">
              <Link to="/">
                ATHLETE <span>||</span>
              </Link>
              <p>34 New Clity 5655, Excel Tower OPG Rpad, 4538FH</p>
              <SocialLinks />
            </div>

            <div className="ftr-nav">
              <div className="ftr-col">
                <Link to="#!" className="ftr-link blue">
                  NEW ARRIVALS
                </Link>
                <Link to="#!" className="ftr-link blue">
                  BEST SELLERS
                </Link>
                <Link to="#!" className="ftr-link">
                  EXCLUSIVE
                </Link>
                <Link to="#!" className="ftr-link">
                  CUSTOMIZED GEAR
                </Link>
                <Link to="#!" className="ftr-link">
                  BUILT FOR YOU
                </Link>
                <Link to="#!" className="ftr-link">
                  OUTLET
                </Link>
              </div>
              {footerItemsLists}
            </div>
          </div>
          <ScrollToTop />
        </div>
      </footer>

      <FooterBar />
    </React.Fragment>
  );
};

export default Footer;
