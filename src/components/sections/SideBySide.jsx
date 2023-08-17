import React from "react";
import { Link } from "react-router-dom";

import { Side1, Side2 } from "../utils/helper";

const SideBySide = () => {
  return (
    <section id="sideBySide">
      <div className="side-wrapper">
        <figure>
          <img loading="lazy" src={Side1} className="w-100" alt="sideBySide" />
          <Link to="#!" className="btn btn-blue">
            SHOP NOW
          </Link>
        </figure>

        <figure>
          <img loading="lazy" src={Side2} className="w-100" alt="sideBySide" />
          <Link to="#!" className="btn btn-blue">
            SHOP NOW
          </Link>
        </figure>
      </div>
    </section>
  );
};

export default SideBySide;
