import React from "react";
import { Link } from "react-router-dom";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  China,
  England,
  Germany,
  India,
  Japan,
  Navbar,
  SocialLinks,
  SriLanka,
  USA,
} from "../utils/helper";

const Header = () => {
  return (
    <header>
      <div className="topbar">
        <div className="topbar-wrapper">
          <div className="left-bar">
            <div className="country-wrapper">
              <div className="country">
                <img loading="lazy" src={India} className="pr-05" width="24" alt="India" />
                <span className="pr-05">India</span>
                <FontAwesomeIcon icon={faChevronDown} />

                <div className="country-dropdown">
                  <div className="country-item">
                    <img loading="lazy" src={China} className="pr-05" width="24" />
                    <span className="pr-05">China</span>
                  </div>
                  <div className="country-item">
                    <img loading="lazy" src={Germany} className="pr-05" width="24" />
                    <span className="pr-05">Germany</span>
                  </div>
                  <div className="country-item">
                    <img loading="lazy" src={Japan} className="pr-05" width="24" />
                    <span className="pr-05">Japan</span>
                  </div>
                  <div className="country-item">
                    <img loading="lazy" src={SriLanka} className="pr-05" width="24" />
                    <span className="pr-05">Sri Lanka</span>
                  </div>
                  <div className="country-item">
                    <img loading="lazy" src={England} className="pr-05" width="24" />
                    <span className="pr-05">England</span>
                  </div>
                  <div className="country-item">
                    <img loading="lazy" src={USA} className="pr-05" width="24" />
                    <span className="pr-1">USA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="currency-wrapper">
              <div className="currency">
                <span className="pr-05">USD</span>
                <FontAwesomeIcon icon={faChevronDown} />

                <ul className="currency-dropdown">
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="currency-link">
                      EUR - Euro
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p>Need Help? +44 (0) 123 4567</p>
          </div>

          <div className="right-bar">
            <Link to="#!" className="rightbar-link">
              Top Deals
            </Link>
            <Link to="#!" className="rightbar-link">
              Deal of the Day
            </Link>
            <Link to="#!" className="rightbar-link">
              Add your Links
            </Link>

            <SocialLinks />
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
