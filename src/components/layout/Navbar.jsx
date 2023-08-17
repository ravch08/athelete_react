import React from "react";
import { Link, NavLink } from "react-router-dom";

import { faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <article className="navbar">
      <div className="navbar-wrapper">
        <div className="nav-brand">
          <Link to="/" className="logo">
            A <span>||</span>
          </Link>
        </div>

        <nav className="navbar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/women" className="nav-link">
                WOMEN
              </NavLink>
              <div className="dropdown-menu">
                <div className="dropdown-wrapper">
                  <div className="col">
                    <h6>WOMEN'S CLOTHING</h6>
                    <span>
                      GO HARD <br />
                    </span>
                    <span>
                      OR GO <br />
                    </span>
                    <span>HOME</span>
                  </div>

                  <div className="col">
                    <ul className="women-categ">
                      <li>
                        <Link to="#!" className="women-links">
                          NOW: $30 OFF $100+ OUTLET
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          NEW ARRIVALS
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          BEST SELLERS
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          GIFT GUIDES
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          PROJECT ROCK
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          ATHELETE RECOVERY
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          CUSTOMIZED GEAR
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          BUILT FOR YOU
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          OUTLET
                        </Link>
                      </li>
                      <li>
                        <Link to="#!" className="women-links">
                          SHOP ALL WOMEN
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <div className="women-lists">
                      <Link to="#!" className="list-head">
                        <h6>TOPS</h6>
                      </Link>

                      <ul className="women-subcat">
                        <li>
                          <Link to="#!" className="sub-links">
                            Jackets{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Hoodies & Sweatshirts
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Tees
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Bras & Tanks
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="women-lists">
                      <Link to="#!" className="list-head">
                        <h6>RUNNING</h6>
                      </Link>

                      <ul className="women-subcat">
                        <li>
                          <Link to="#!" className="sub-links">
                            Bottoms
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Outwear
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Accessories
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Shoes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col">
                    <div className="women-lists">
                      <Link to="#!" className="list-head">
                        <h6>BOTTOMS</h6>
                      </Link>

                      <ul className="women-subcat">
                        <li>
                          <Link to="#!" className="sub-links">
                            Pants{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Shorts
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Leggings
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Underwear
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="women-lists">
                      <Link to="#!" className="list-head">
                        <h6>GOLF</h6>
                      </Link>

                      <ul className="women-subcat">
                        <li>
                          <Link to="#!" className="sub-links">
                            Tops
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Shoes{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Pants
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Gear
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col">
                    <div className="women-lists">
                      <Link to="#!" className="list-head">
                        <h6>SHOES</h6>
                      </Link>

                      <ul className="women-subcat">
                        <li>
                          <Link to="#!" className="sub-links">
                            Hiking
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Training
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Basketball
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="women-lists">
                      <a href="#" className="list-head">
                        <h6>ACCESSORIES</h6>
                      </a>

                      <ul className="women-subcat">
                        <li>
                          <Link to="#!" className="sub-links">
                            Socks
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Gloves
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Equipment
                          </Link>
                        </li>
                        <li>
                          <Link to="#!" className="sub-links">
                            Backpacks
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/men" className="nav-link">
                MEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/arrivals" className="nav-link">
                ARRIVALS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link">
                CATEGORIES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-account">
          <div className="nav-user">
            <Link to="#!">
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link to="#!">
              {" "}
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="#!">
              {" "}
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>

          <div className="nav-bag">
            <i className="fas fa-shopping-bag"></i>
            <p>BAG</p>
            <span>|</span>
            <p>0</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Navbar;
