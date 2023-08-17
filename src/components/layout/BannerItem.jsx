import React from "react";

const BannerItem = (props) => {
  return (
    <div className="banner-item">
      <img loading="lazy" src={props.imgSrc} className="w-100" alt={props.title} />
      <div className="slider-content">
        <div className="left-panel">
          <h6>{props.subText}</h6>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="btn btn-blue">{props.btnText}</div>
        </div>

        <div className="right-panel">
          <div className="blue-bg2"></div>
          <img loading="lazy" src={props.imgSrcHover} className="helmet" alt={props.title} />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
