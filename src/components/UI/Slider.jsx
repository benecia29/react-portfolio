import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import sliderimgs from "../../assets/data/sliderData";

export default function Slider() {
  const [sliders, setSliders] = useState(sliderimgs);

  return (
    <>
      <div className="flex justify-center items-center sm:w-[50vw] bg-[#F3F6F6] px-3 py-3 my-3 rounded-xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[50%]"
        >
          {sliders.map((slide, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <SwiperSlide>
                <img className="rounded-[8px]" src={slide.imgUrl} alt="" />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
}
