import React from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { featureItems } from "../utils/data";
import { FeatureItem } from "../utils/helper";

const Features = () => {
  const featureItemsList = featureItems?.map((featureItem) => (
    <SwiperSlide key={featureItem.id}>
      <FeatureItem title={featureItem.title} imgSrc={featureItem.imgSrc} />
    </SwiperSlide>
  ));

  return (
    <section id="features">
      <div className="feature-wrapper">
        <div className="feature-category">
          <h2>
            FEATURED <br /> CATEGORIES
          </h2>
          <div className="feat-list">
            <Link to="#!" className="feat-links">
              NEW ARRIVALS
            </Link>
            <Link to="#!" className="feat-links">
              BEST SELLERS
            </Link>
            <Link to="#!" className="feat-links">
              EXCLUSIVES
            </Link>
            <Link to="#!" className="feat-links">
              CUSTOMIZED GEAR
            </Link>
            <Link to="#!" className="feat-links">
              BUILT FOR YOU
            </Link>
            <Link to="#!" className="feat-links">
              OUTLET
            </Link>
            <Link to="#!" className="feat-links btn-view">
              VIEW ALL
            </Link>
          </div>
        </div>

        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={20}
          grabCursor={true}
          slidesPerView={4}
          modules={[Autoplay]}
          centeredSlides={false}
          slideToClickedSlide={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {featureItemsList}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
