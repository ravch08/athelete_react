import React from "react";
import { FooterBarIcon } from "../utils/helper";

const FooterBar = () => {
  return (
    <article className="footbar">
      <div className="container">
        <div className="footbar-wrapper">
          <p>
            © 2020 Athelete 2 - Premium Magento Theme. All Rights Reserved. Developed by Olegnax ***
            This is a demo store. Any orders placed through this store will not be honored or
            fulfilled.
          </p>

          <img loading="lazy" src={FooterBarIcon} alt="cc_icons" />
        </div>
      </div>
    </article>
  );
};

export default FooterBar;
