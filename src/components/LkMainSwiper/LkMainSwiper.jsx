import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import style from "./LkMainSwiper.module.scss";

import LkMainSwiperSlide from "./LkMainSwiperSlide.jsx";
const LkMainSwiper = (props) => {
  let slide = props.slide.map((e) => (
    <SwiperSlide key={e.id}>
      <LkMainSwiperSlide id={e.id} key={e.id} img={e.img} text={e.text} />
    </SwiperSlide>
  ));
  return (
    <div>
      <div className={style.flex}>
        <div className={style.title}>{props.title}</div>
        <NavLink to="" className={style.link}>
          Подробнее
        </NavLink>
      </div>
      <div className={style.flexSwiper}>
        <Swiper
          breakpoints={{
            960: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 6,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 3,
            },
          }}
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
        >
          {/* <Swiper
           breakpoints={{
          }}
            // 960: {
            //   slidesPerView: 4,
            //   spaceBetween: 8,
            // },
            // 720: {
            //   slidesPerView: 3,
            //   spaceBetween: 6,
            // },
            // 540: {
            //   slidesPerView: 2,
            //   spaceBetween: 4,
            // },
            // 320: {
            //   slidesPerView: 5,
            //   spaceBetween: 2,
            // },
                    modules={[Navigation]}

                    slidesPerView={4}
                    spaceBetween={20}
                    className={style.swiper}
                    navigation={{ nextEl: ".next"}}

                > */}
          {slide}
        </Swiper>
      </div>
    </div>
  );
};

export default LkMainSwiper;
