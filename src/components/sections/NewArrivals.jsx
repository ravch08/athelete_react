import React from "react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { newArrivalItems } from "../utils/data";
import { NewArrivalItem } from "../utils/helper";

const NewArrivals = () => {
  const newArrivalItemsList = newArrivalItems?.map((newArrivalItem) => (
    <SwiperSlide key={newArrivalItem.id}>
      <NewArrivalItem
        title={newArrivalItem.title}
        price={newArrivalItem.price}
        imgSrc={newArrivalItem.imgSrc}
        priceCrossed={newArrivalItem.priceCrossed}
      />
    </SwiperSlide>
  ));

  return (
    <section id="newArrivals">
      <div className="container-fluid">
        <div className="heading text-center">
          <h6>NEW ARRIVALS</h6>
          <h2>LATEST & GREATEST</h2>
        </div>

        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={20}
          grabCursor={true}
          slidesPerView={4}
          modules={[Autoplay]}
          centeredSlides={false}
          id={"swiper-arrivals"}
          slideToClickedSlide={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {newArrivalItemsList}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
