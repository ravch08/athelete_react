import React from "react";
import { Link } from "react-router-dom";

import { PremiumImg } from "../utils/helper";

const Premium = () => {
  return (
    <section id="premium">
      <div className="container">
        <div className="premium-wrapper">
          <div className="premium-image">
            <img loading="lazy" src={PremiumImg} alt="premium" />
            <div className="premium-content">
              <h6 className="badge badge-blue">FEATURES</h6>
              <h2>EXTREMELY POWERFUL AND FLEXIBLE PREMIUM MAGENTO THEME</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quam temporibus
                aspernatur. Hic similique, voluptatibus eligendi, sapiente deserunt iure nostrum
                repudiandae nihil adipisci minus soluta?
              </p>
              <Link to="#!" className="btn-underline">
                READ MORE
              </Link>
            </div>
          </div>

          <div className="premium-headlines">
            <div className="headline">
              <h6 className="badge badge-grey">FEATURES</h6>
              <h3>EXTREMELY POWERFUL AND FLEXIBLE PREMIUM MAGENTO THEME</h3>
            </div>

            <div className="headline">
              <h6 className="badge badge-grey">COMPANY</h6>
              <h3>ATHELETE2 MAGENTO2 THEME IS ESSENTIAL FOR EVERY SPORTS STORE</h3>
            </div>

            <div className="headline">
              <div className="d-flex">
                <h6 className="badge badge-grey">FEATURES</h6>
                <h6 className="badge badge-grey">NEWS</h6>
              </div>
              <h3>GAIN CONTROL OVER YOUR MENU WITH EXCLUSIVE OLEGNAX MEGA MENU EXTENSION</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
