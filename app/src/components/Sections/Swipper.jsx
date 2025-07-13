import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import card1 from "../../assets/swippercard1.svg";
import card2 from "../../assets/SwipperCard2.svg";
import styles from "./swipper.module.css"; // Assuming you have a CSS module for styling

export default function Swipper() {
  return (
    <div style={{width:"100%", backgroundColor:"white"}}>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true, el: ".swiperPagination" }}
          // scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            {" "}
            <img src={card1} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={card2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={card1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={card2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={card1} alt="" />
          </SwiperSlide>
        </Swiper>
        {/* Pagination */}
        {/* This div is used for pagination, it will be styled by Swiper */}
        <div className={styles.swiperPagination}></div>
      </div>
    </div>
  );
}
