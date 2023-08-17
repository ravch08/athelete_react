import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { essentialItems } from "../utils/data";
import { EssentialItem } from "../utils/helper";

const Essentials = () => {
  const essentialItemsList = essentialItems.map((essentialItem) => (
    <SwiperSlide key={essentialItem.id}>
      <EssentialItem
        title={essentialItem.title}
        imgSrc={essentialItem.imgSrc}
        btnText={essentialItem.btnText}
        btnClass={essentialItem.btnClass}
      />
    </SwiperSlide>
  ));

  return (
    <section id="essentials">
      <Swiper
        loop={true}
        speed={1500}
        spaceBetween={0}
        loopedSlides={50}
        grabCursor={true}
        slidesPerView={4}
        centeredSlides={false}
        slideToClickedSlide={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {essentialItemsList}
      </Swiper>
    </section>
  );
};

export default Essentials;
