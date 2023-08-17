import React from "react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { newArrivalItems } from "../utils/data";
import { NewArrivalItem } from "../utils/helper";

const Gear = () => {
  const gearItemsList1 = newArrivalItems?.map((gearItems) => (
    <SwiperSlide key={gearItems.id}>
      <NewArrivalItem
        title={gearItems.title}
        price={gearItems.price}
        imgSrc={gearItems.imgSrc}
        priceCrossed={gearItems.priceCrossed}
      />
    </SwiperSlide>
  ));

  const gearItemsList2 = newArrivalItems?.map((gearItems) => (
    <SwiperSlide key={gearItems.id}>
      <NewArrivalItem
        title={gearItems.title}
        price={gearItems.price}
        imgSrc={gearItems.imgSrc}
        priceCrossed={gearItems.priceCrossed}
      />
    </SwiperSlide>
  ));

  return (
    <section id="gear">
      <div className="gear-wrapper">
        <div className="shoulder-pads">
          <div className="heading">
            <h2>
              SCHUTT HELMETS <br /> AND SHOULDER PADS
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, et fuga inventore nam
              placeat saepe autem quia alias voluptatem accusamus ut distinctio! Optioconsectetur
              iusto iste. Omnis, ea expedita.
            </p>
          </div>

          <Swiper
            loop={true}
            speed={1500}
            spaceBetween={10}
            grabCursor={true}
            navigation={true}
            slidesPerView={3}
            modules={[Autoplay]}
            centeredSlides={false}
            id={"swiper-arrivals"}
            slideToClickedSlide={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {gearItemsList1}
          </Swiper>
        </div>

        <div className="gear-clothing">
          <div className="heading">
            <h2>
              BASKETBALL REFEREE GEAR <br /> AND CLOTHING
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, et fuga inventore nam
              placeat saepe autem quia alias voluptatem accusamus ut distinctio! Optio consectetur
              iusto iste. Omnis, ea expedita.
            </p>
          </div>

          <Swiper
            loop={true}
            speed={1500}
            spaceBetween={10}
            loopedSlides={50}
            grabCursor={true}
            navigation={true}
            slidesPerView={3}
            modules={[Autoplay]}
            centeredSlides={false}
            id={"swiper-arrivals"}
            slideToClickedSlide={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {gearItemsList2}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gear;
