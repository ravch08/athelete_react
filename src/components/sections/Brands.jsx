import React from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8 } from "../utils/helper";

const Brands = () => {
  return (
    <section id="brands">
      <div className="container">
        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={20}
          grabCursor={true}
          slidesPerView={12}
          modules={[Autoplay]}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img loading="lazy" src={Brand1} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand2} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand3} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand4} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand5} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand6} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand7} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand8} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand5} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand6} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand3} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand4} className="w-100" alt="brand" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Brand7} className="w-100" alt="brand" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
