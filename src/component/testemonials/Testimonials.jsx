import React from "react";
import "./testimonials.css";
import Img1 from "../../assets/images.jpeg";
import Img2 from "../../assets/download.jpeg";
import Img3 from "../../assets/FB7TKJgXMAE-qQw.jpeg";
import Img4 from "../../assets/960x960.jpg";

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";


function Testimonials() {
  const data = [
    {
      avatar: Img1,
      name: "kanye west",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum accusantium repudiandae, soluta impedit totam animi. Tempore nemo quasi dolorem.",
    },
    {
      avatar: Img2,
      name: "Yeezus",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum accusantium repudiandae, soluta impedit totam animi. Tempore nemo quasi dolorem.",
    },
    {
      avatar: Img3,
      name: "YE",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum accusantium repudiandae, soluta impedit totam animi. Tempore nemo quasi dolorem.",
    },
    {
      avatar: Img4,
      name: "Pablo",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum accusantium repudiandae, soluta impedit totam animi. Tempore nemo quasi dolorem.",
    },
    
  ];
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
