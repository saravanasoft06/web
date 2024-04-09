import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/tally-prime-logo.svg";
import img3 from "../assets/tally_logo_white.svg";
import img4 from "../assets/software-services.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <section className="w-11/12 mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={img2} alt="" className="w-full h-[500px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="w-full h-[500px] bg-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full h-[500px] bg-black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" className="w-full h-[500px] bg-black" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
