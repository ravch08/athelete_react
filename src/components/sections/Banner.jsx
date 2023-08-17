import React from "react";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { bannerItems } from "../utils/data";
import { BannerItem } from "../utils/helper";

const Banner = () => {
  const bannerItemsList = bannerItems?.map((bannerItem) => (
    <SwiperSlide key={bannerItem.id}>
      <BannerItem
        title={bannerItem.title}
        imgSrc={bannerItem.imgSrc}
        subText={bannerItem.subText}
        btnText={bannerItem.btnText}
        description={bannerItem.description}
        imgSrcHover={bannerItem.imgSrcHover}
      />
    </SwiperSlide>
  ));

  return (
    <section id="slider">
      <Swiper
        init={true}
        loop={true}
        speed={1500}
        effect={"fade"}
        spaceBetween={5}
        grabCursor={true}
        centeredSlides={true}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {bannerItemsList}
      </Swiper>
    </section>
  );
};

export default Banner;
