import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/tally-black.png";
import img2 from "../assets/tally-prime-logo.svg";
import img3 from "../assets/tally_logo_white.svg";
import img4 from "../assets/aws.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <section className="w-11/12 mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination ,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        draggable
        loop="true"
      >
        <SwiperSlide>
          <img src={img2} alt="" className="w-full lg:w-3/4 mx-auto h-[250px] lg:h-[450px]" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img3} alt="" className="w-full lg:w-3/4 mx-auto h-[250px] lg:h-[450px] bg-black" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={img1} alt="" className="w-full lg:w-3/4 mx-auto h-[250px] lg:h-[450px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full lg:w-3/4 mx-auto h-[250px] lg:h-[450px] " />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
